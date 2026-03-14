export type InterviewerRole = 'interviewer1' | 'interviewer2';

export type Recommendation = 'Strongly Recommend' | 'Recommend' | 'Consider if Required' | 'Not Recommended';

export type RoleUnderstanding = 'Excellent' | 'Good' | 'Average' | 'Needs Improvement';

export interface ScoreSheet {
    // 5 Parameters (10 marks each)
    communication: number;
    technical: number;
    leadership: number;
    teamwork: number;
    initiative: number;

    total: number; // /50

    // Details
    interviewerName?: string;
    interviewerPosition?: string; // e.g. "Chairperson", "Tech Lead"
    interviewerDomain?: string; // e.g. "Technical", "Events"
    date?: string;

    // Qualitative Assessment
    roleUnderstanding?: RoleUnderstanding;
    roleUnderstandingComments?: string; // "Brief comments"
    strengths?: string;
    improvements?: string;
    vision?: string;
    behavioralResponse?: string;
    selectionReason?: string; // Why select?
    rejectionReason?: string; // Why not?

    feedback?: string; // Constructive feedback for candidate

    recommendation?: Recommendation;
    finalRating?: number; // Out of 10
}

export type CandidateStatus =
    | 'Pending'
    | 'In-Progress'
    | 'Interviewed'
    | 'Selected'
    | 'Rejected'
    | 'Backup';

export interface Candidate {
    id: string;
    name: string;
    branch: string;
    year: string;
    email: string;
    phone: string;
    rollNo?: string; // Optional for compatibility

    // Application Details
    positionApplied?: string; // New field
    track: string;
    whyIeee: string;
    skills: string;
    pastActivities: string;

    // Interview Data
    scores: {
        interviewer1: ScoreSheet | null;
        interviewer2: ScoreSheet | null;
    };

    departmentScores?: Record<string, number>; // e.g. { "Technical": 8.5, "Creative": 9.0 }

    averageScore: number; // /50
    finalRatingAverage: number; // /10
    recommendation?: Recommendation; // Consolidated or latest recommendation

    notes: string;
    tags: string[];
    status: CandidateStatus;

    createdAt: string;
    today?: string; // Optional date
    assignedInterviewerId?: string;
    interviewStartTime?: string;
}

export type UserRole = 'SuperAdmin' | 'DeptHead' | 'Interviewer';

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    departmentId?: string; // Nullable for SuperAdmin
    passwordHash?: string; // Simplified for now
}

export interface Department {
    id: string;
    name: string;
    description?: string;
}

export interface Member {
    id: string;
    name: string;
    email: string;
    departmentId: string;
    role: string; // e.g. "Junior Committee"
    startDate: string;
    status: 'Active' | 'Alumni';
    passwordHash?: string; // Optional for creating new users
}

export interface DB {
    candidates: Candidate[];
    users: User[];
    departments: Department[];
    members: Member[];
    questions?: Record<string, string[]>; // Dynamic Question Bank
}
