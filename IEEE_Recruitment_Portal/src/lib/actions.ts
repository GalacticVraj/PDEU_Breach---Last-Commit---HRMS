'use server';

import connectDB from './dbConfig';
import { CandidateModel, UserModel, DepartmentModel, QuestionModel, ICandidate, IUser, IDepartment } from '@/models/models';
import { Candidate, CandidateStatus, InterviewerRole, ScoreSheet, Member, UserRole, User } from './types';
import { revalidatePath } from 'next/cache';

// Helper to ensure connection
async function db() {
    await connectDB();
}

// ==========================================
// DEPARTMENT ACTIONS
// ==========================================

export async function getDepartments(): Promise<IDepartment[]> {
    await db();
    const depts = await DepartmentModel.find({}).lean();
    return depts.map((d: any) => ({ ...d, _id: d._id.toString() }));
}

export async function addDepartment(name: string) {
    await db();
    const id = `dept_${name.toLowerCase().replace(/\s+/g, '_')}`;
    const exists = await DepartmentModel.findOne({ id });
    if (exists) return;

    await DepartmentModel.create({ id, name });
    revalidatePath('/');
    revalidatePath('/members/add');
    revalidatePath('/candidates/add');
}

export async function renameDepartment(id: string, newName: string) {
    await db();
    await DepartmentModel.findOneAndUpdate({ id }, { name: newName });
    revalidatePath('/');
    revalidatePath('/members/add');
    revalidatePath('/candidates/add');
}

export async function deleteDepartment(id: string) {
    await db();
    await DepartmentModel.deleteOne({ id });
    revalidatePath('/');
}

// ==========================================
// USER ACTIONS (Login)
// ==========================================

export async function getUsers(): Promise<User[]> {
    await db();
    const users = await UserModel.find({}).lean();
    return users.map((u: any) => ({
        id: u.id,
        name: u.name,
        email: u.email,
        passwordHash: u.passwordHash,
        role: u.role as UserRole,
        departmentId: u.departmentId
    }));
}

// ==========================================
// CANDIDATE ACTIONS
// ==========================================

export async function getCandidates(): Promise<Candidate[]> {
    await db();
    const candidates = await CandidateModel.find({}).lean();
    // Map _id and dates if necessary, though lean() is mostly POJO.
    // We used a custom 'id' string field, so we rely on that.
    return candidates.map((c: any) => ({
        ...c,
        _id: c._id.toString(),
        createdAt: c.createdAt ? c.createdAt.toISOString() : undefined,
        interviewStartTime: c.interviewStartTime,
        // Ensure departmentScores is a plain object
        departmentScores: c.departmentScores ? (c.departmentScores instanceof Map ? Object.fromEntries(c.departmentScores) : c.departmentScores) : {}
    })) as unknown as Candidate[];
}

export async function getCandidate(id: string): Promise<Candidate | undefined> {
    await db();
    const candidate = await CandidateModel.findOne({ id }).lean();
    if (!candidate) return undefined;
    return {
        ...candidate,
        _id: (candidate as any)._id.toString(),
        createdAt: (candidate as any).createdAt?.toISOString()
    } as unknown as Candidate;
}

export async function addCandidates(newCandidates: Candidate[]) {
    await db();

    // 1. Extract emails and roll numbers from the new batch to check against DB
    const emails = newCandidates.map(c => c.email).filter(e => e);
    const rollNos = newCandidates.map(c => c.rollNo).filter(r => r);

    // 2. Find existing candidates that match either email OR roll number
    const existing = await CandidateModel.find({
        $or: [
            { email: { $in: emails } },
            { rollNo: { $in: rollNos } }
        ]
    }).select('email rollNo').lean();

    const existingEmails = new Set(existing.map((c: any) => c.email));
    const existingRollNos = new Set(existing.map((c: any) => c.rollNo));

    // 3. Filter out duplicates
    const finalToAdd = newCandidates.filter(c => {
        const emailExists = c.email && existingEmails.has(c.email);
        const rollExists = c.rollNo && existingRollNos.has(c.rollNo);
        return !emailExists && !rollExists;
    });

    if (finalToAdd.length > 0) {
        await CandidateModel.insertMany(finalToAdd);
    }

    revalidatePath('/candidates');

    return {
        added: finalToAdd.length,
        skipped: newCandidates.length - finalToAdd.length
    };
}

export async function updateCandidateStatus(id: string, status: CandidateStatus) {
    await db();
    const update: any = { status };
    if (status === 'In-Progress') {
        // Only set start time if not set? Or always? Logic in previous was: if not set.
        // But doing it atomically in Mongo is harder in one go without fetching.
        // Let's fetch first.
    }

    const candidate = await CandidateModel.findOne({ id });
    if (candidate) {
        candidate.status = status;
        if (status === 'In-Progress' && !(candidate as any).interviewStartTime) {
            candidate.set('interviewStartTime', new Date().toISOString());
        }
        await candidate.save();
        revalidatePath('/candidates');
        revalidatePath(`/interview/${id}`);
    }
}

export async function submitScore(id: string, role: string, score: ScoreSheet) {
    await db();
    const candidate = await CandidateModel.findOne({ id });

    if (candidate) {
        // Init scores if null (handled by Schema default usually, but robust check)
        if (!candidate.scores) candidate.scores = { interviewer1: null, interviewer2: null };

        // We accept flexible ScoreSheet structure
        // Direct assignment works because of Mixed type
        const currentScores = candidate.scores;
        currentScores[role] = score;

        // Mark as modified because 'scores' is Mixed type
        candidate.markModified('scores');

        // --- Department Scoring Logic ---
        const track = score.interviewerDomain || 'General';

        // Check partner score
        const partnerRole = role === 'interviewer1' ? 'interviewer2' : 'interviewer1';
        const s2 = currentScores[partnerRole];

        let trackAverage = score.total;
        let finalRatingForTrack = score.finalRating || (score.total / 5);

        // Only average with partner if they are ALSO from the same track
        if (s2 && s2.interviewerDomain === track) {
            trackAverage = (score.total + s2.total) / 2;
            const r2 = s2.finalRating || (s2.total / 5);
            finalRatingForTrack = (finalRatingForTrack + r2) / 2;

            // If both interviewed, mark status
            if (candidate.status === 'In-Progress') {
                candidate.status = 'Interviewed';
            }
        }

        // Update Department Map (Map type in Mongoose)
        if (!candidate.departmentScores) candidate.departmentScores = new Map();
        candidate.departmentScores.set(track, parseFloat(trackAverage.toFixed(1)));

        // Also update the Legacy/Global fields for backward compatibility
        // We'll set them to the *latest* updated track's scores to ensure the main table shows something relevant
        candidate.averageScore = parseFloat(trackAverage.toFixed(1));
        candidate.finalRatingAverage = parseFloat(finalRatingForTrack.toFixed(1));

        if (score.recommendation) {
            // @ts-ignore
            candidate.recommendation = score.recommendation;
        }

        await candidate.save();
        revalidatePath(`/interview/${id}`);
        revalidatePath('/candidates');
    }
}

export async function updateCandidateNotes(id: string, notes: string) {
    await db();
    await CandidateModel.findOneAndUpdate({ id }, { notes });
    revalidatePath(`/interview/${id}`);
}

export async function updateCandidateTags(id: string, tags: string[]) {
    await db();
    await CandidateModel.findOneAndUpdate({ id }, { tags });
    revalidatePath(`/interview/${id}`);
}

export async function deleteCandidate(id: string) {
    await db();
    await CandidateModel.deleteOne({ id });
    revalidatePath('/candidates');
}

export async function updateCandidateDetails(id: string, data: Partial<Candidate>) {
    await db();
    await CandidateModel.findOneAndUpdate({ id }, { $set: data });
    revalidatePath('/candidates');
    revalidatePath(`/interview/${id}`);
    revalidatePath(`/reports/${id}`);
}


// ==========================================
// MEMBER ACTIONS
// ==========================================

// NOTE: in MongoDB version, we treat "Member" (profile) and "User" (auth) as linked but maybe we can merge them?
// The previous code kept them separate arrays. We'll stick to that logic to avoid frontend breakage.
// 'getMembers' returns the list of Member profiles (displayed in Admin panel).
// 'getUsers' returns the login credentials (used by middleware/auth).

// Since we defined schemas for both, we maintain dual writes.

export async function getMembers(): Promise<Member[]> {
    await db();
    const users = await UserModel.find({}).lean();
    // We map Users to Members structure (since they are basically the same in this app)
    // Or did we store extra data on Member?
    // Looking at types.ts: Member extends User.
    // In db.json, they were separate arrays.
    // We will just fetch Users and map them to Member[] to simplify, OR fetch specific member collection if we want.
    // Let's stick to using UserModel as the source of truth for Members too, to normalize data.
    return users.map((u: any) => ({
        id: u.id,
        name: u.name,
        email: u.email,
        passwordHash: u.passwordHash,
        role: u.role as UserRole,
        departmentId: u.departmentId,
        status: 'Active',
        startDate: new Date().toISOString() // Mock fields if missing
    }));
}

export async function addMember(member: Member) {
    await db();
    // Check if exists
    const exists = await UserModel.findOne({ email: member.email });
    if (exists) return;

    await UserModel.create({
        id: member.id,
        name: member.name,
        email: member.email,
        passwordHash: member.passwordHash || 'ieee123',
        role: member.role,
        departmentId: member.departmentId
    });

    revalidatePath('/members');
}

export async function getMember(id: string) {
    await db();
    const u = await UserModel.findOne({ id }).lean();
    if (!u) return undefined;
    return {
        id: u.id,
        name: u.name,
        email: u.email,
        passwordHash: u.passwordHash,
        role: u.role as UserRole,
        departmentId: u.departmentId,
        status: 'Active',
        startDate: ''
    } as Member;
}

export async function updateMember(id: string, data: Partial<Member>) {
    await db();
    // Find User by ID first, or Email
    // Updating UserModel
    const updatePayload: any = {};
    if (data.name) updatePayload.name = data.name;
    if (data.email) updatePayload.email = data.email;
    if (data.role) updatePayload.role = data.role;
    if (data.departmentId) updatePayload.departmentId = data.departmentId;
    if (data.passwordHash) updatePayload.passwordHash = data.passwordHash;

    await UserModel.findOneAndUpdate({ id }, { $set: updatePayload });
    revalidatePath('/members');
}

export async function deleteMember(id: string) {
    await db();
    await UserModel.deleteOne({ id });
    revalidatePath('/members');
}


// ==========================================
// QBANK ACTIONS
// ==========================================

export async function getQuestions() {
    await db();
    const questions = await QuestionModel.find({}).lean();

    if (questions.length === 0) {
        // Seed
        const initialData = require('./data').QUESTION_BANK;
        // Insert keys as categories
        const payload = Object.entries(initialData).map(([k, v]) => ({
            category: k,
            questions: v
        }));
        await QuestionModel.insertMany(payload);
        return initialData;
    }

    // Convert array back to object: { category: [q1, q2] }
    const result: any = {};
    questions.forEach((q: any) => {
        result[q.category] = q.questions;
    });
    return result;
}

export async function updateQuestions(category: string, newQuestions: string[]) {
    await db();
    await QuestionModel.findOneAndUpdate(
        { category },
        { questions: newQuestions },
        { upsert: true }
    );
    revalidatePath('/qbank');
    revalidatePath('/interview/[id]', 'page');
}

// ==========================================
// SYSTEM ACTIONS
// ==========================================

// ... existing code ...

export async function resetCandidate(id: string) {
    await db();
    const candidate = await CandidateModel.findOne({ id });
    if (candidate) {
        candidate.status = 'Pending';
        // Reset scores
        candidate.scores = { interviewer1: null, interviewer2: null };
        candidate.averageScore = 0;
        candidate.finalRatingAverage = 0;
        candidate.recommendation = undefined;
        // Optional: Add a note or keep existing notes
        candidate.notes = (candidate.notes || '') + '\n[System] Interview reset by Admin on ' + new Date().toLocaleString();

        // Because 'scores' is Mixed type, mark as modified
        candidate.markModified('scores');

        await candidate.save();
        revalidatePath('/candidates');
        revalidatePath(`/interview/${id}`);
        revalidatePath(`/reports/${id}`);
    }
}

export async function resetDatabase() {
    await db();
    await CandidateModel.deleteMany({});
    // We typically don't delete Users/Depts in reset, just candidates?
    // The previous code: db.candidates = [], db.members = []
    // So we delete Candidates and Users (except Admin).
    // Let's safe-delete: Keep SuperAdmin.
    await UserModel.deleteMany({ role: { $ne: 'SuperAdmin' } });

    revalidatePath('/');
}
