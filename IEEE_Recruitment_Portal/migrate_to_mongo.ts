import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { CandidateModel, UserModel, DepartmentModel, QuestionModel } from './src/models/models';

const URI = 'mongodb+srv://24btm032_db_user:admin123@cluster0.hkrpnsp.mongodb.net/?appName=Cluster0';

async function migrate() {
    try {
        console.log("Connecting do DB...");
        await mongoose.connect(URI);
        console.log("Connected.");

        // Read db.json
        const dbPath = path.join(process.cwd(), 'db.json');
        const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

        console.log(`Found ${data.candidates.length} candidates, ${data.users.length} users, ${data.departments.length} depts.`);

        // 1. Departments
        await DepartmentModel.deleteMany({});
        await DepartmentModel.insertMany(data.departments);
        console.log("Departments migrated.");

        // 2. Users (and Members logic)
        await UserModel.deleteMany({});
        const cleanUsers = data.users.map((u: any) => ({
            id: u.id.toString(),
            name: u.name,
            email: u.email,
            passwordHash: u.passwordHash,
            role: u.role,
            departmentId: u.departmentId
        }));
        await UserModel.insertMany(cleanUsers);
        console.log("Users migrated.");

        // 3. Candidates
        await CandidateModel.deleteMany({});
        const cleanCandidates = data.candidates.map((c: any) => ({
             ...c,
             _id: undefined, // let mongo generate _id
             id: c.id.toString()
        }));
        await CandidateModel.insertMany(cleanCandidates);
        console.log("Candidates migrated.");

        // 4. Questions
        await QuestionModel.deleteMany({});
        const qPayload = Object.entries(data.questions || {}).map(([k, v]) => ({
            category: k,
            questions: v
        }));
        await QuestionModel.insertMany(qPayload);
        console.log("Questions migrated.");

        console.log("MIGRATION COMPLETE!");
        await mongoose.disconnect();

    } catch (e) {
        console.error("Migration failed:", e);
    }
}

migrate();
