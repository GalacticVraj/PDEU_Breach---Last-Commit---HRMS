import mongoose, { Schema, Document, Model } from 'mongoose';

/* =========================================
   INTERFACES (Mirrors types.ts)
   ========================================= */

// Keep these consistent with types.ts, or eventually replace types.ts
export interface ICandidate extends Document {
    id: string; // We'll keep the string ID for URL consistency, or map _id to id
    name: string;
    rollNo: string;
    email: string;
    phone: string;
    branch: string;
    year: string;
    gender: string;
    track: string;
    status: string;
    scores: any;
    departmentScores?: Map<string, number>; // or Record/object in generic
    averageScore: number;
    finalRatingAverage: number;
    notes: string;
    tags: string[];
    createdAt: Date;
    assignedInterviewerId?: string;
}

export interface IUser extends Document {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    role: string;
    departmentId?: string;
}

export interface IDepartment extends Document {
    id: string;
    name: string;
}

export interface IQuestionBank extends Document {
    category: string;
    questions: string[];
}


/* =========================================
   SCHEMAS
   ========================================= */

const CandidateSchema = new Schema<ICandidate>({
    id: { type: String, required: true, unique: true }, // Custom ID from UUID
    name: { type: String, required: true },
    rollNo: { type: String, default: '' },
    email: { type: String, default: '' },
    phone: { type: String, default: '' },
    branch: { type: String, default: '' },
    year: { type: String, default: '' },
    track: { type: String, default: 'General' },
    status: { type: String, default: 'Pending' },
    scores: { type: Schema.Types.Mixed, default: { interviewer1: null, interviewer2: null } },
    departmentScores: { type: Map, of: Number, default: {} },
    averageScore: { type: Number, default: 0 },
    finalRatingAverage: { type: Number, default: 0 },
    notes: { type: String, default: '' },
    tags: { type: [String], default: [] },
    createdAt: { type: Date, default: Date.now },
    assignedInterviewerId: { type: String }
}, { strict: false }); // Strict false allows flexibility if we add fields later

const UserSchema = new Schema<IUser>({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: String, required: true },
    departmentId: { type: String }
});

const DepartmentSchema = new Schema<IDepartment>({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true }
});

const QuestionBankSchema = new Schema<IQuestionBank>({
    category: { type: String, required: true, unique: true },
    questions: { type: [String], default: [] }
});

/* =========================================
   MODELS
   ========================================= */

// Prevent overwrite error in hot-reload
export const CandidateModel: Model<ICandidate> = mongoose.models.Candidate || mongoose.model('Candidate', CandidateSchema);
export const UserModel: Model<IUser> = mongoose.models.User || mongoose.model('User', UserSchema);
export const DepartmentModel: Model<IDepartment> = mongoose.models.Department || mongoose.model('Department', DepartmentSchema);
export const QuestionModel: Model<IQuestionBank> = mongoose.models.Question || mongoose.model('Question', QuestionBankSchema);
