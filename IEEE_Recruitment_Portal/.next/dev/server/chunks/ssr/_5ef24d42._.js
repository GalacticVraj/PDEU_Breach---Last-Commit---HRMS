module.exports = [
"[project]/src/lib/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QUESTION_BANK",
    ()=>QUESTION_BANK,
    "SCORING_RUBRIC",
    ()=>SCORING_RUBRIC,
    "TAG_OPTIONS",
    ()=>TAG_OPTIONS
]);
const SCORING_RUBRIC = [
    {
        category: 'Communication Skills',
        max: 10,
        guide: [
            {
                range: '0-2',
                desc: 'Incoherent / Struggling'
            },
            {
                range: '3-4',
                desc: 'Average / Basic fluency'
            },
            {
                range: '5-6',
                desc: 'clear points, decent flow'
            },
            {
                range: '7-8',
                desc: 'Articulate, confident, structured'
            },
            {
                range: '9-10',
                desc: 'Exceptional, persuasive, professional'
            }
        ]
    },
    {
        category: 'Technical / Domain Knowledge',
        max: 10,
        guide: [
            {
                range: '0-2',
                desc: 'No basics / Wrong answers'
            },
            {
                range: '3-4',
                desc: 'Weak basics'
            },
            {
                range: '5-6',
                desc: 'Textbook knowledge / Average'
            },
            {
                range: '7-8',
                desc: 'Strong concepts & practical sense'
            },
            {
                range: '9-10',
                desc: 'Expert / Deep understanding'
            }
        ]
    },
    {
        category: 'Leadership Potential',
        max: 10,
        guide: [
            {
                range: '0-2',
                desc: 'Passive / Avoids responsibility'
            },
            {
                range: '3-4',
                desc: 'Follower mindset only'
            },
            {
                range: '5-6',
                desc: 'Can manage small tasks'
            },
            {
                range: '7-8',
                desc: 'Takes initiative, guides others'
            },
            {
                range: '9-10',
                desc: 'Visionary, inspirer, decisive'
            }
        ]
    },
    {
        category: 'Teamwork & Collaboration',
        max: 10,
        guide: [
            {
                range: '0-2',
                desc: 'Egoistic / Disruptive'
            },
            {
                range: '3-4',
                desc: 'Loner, hesitant to share'
            },
            {
                range: '5-6',
                desc: 'Cooperative'
            },
            {
                range: '7-8',
                desc: 'Supportive, reliable team player'
            },
            {
                range: '9-10',
                desc: 'Elevates the whole team'
            }
        ]
    },
    {
        category: 'Initiative & Enthusiasm',
        max: 10,
        guide: [
            {
                range: '0-2',
                desc: 'Uninterested / Bored'
            },
            {
                range: '3-4',
                desc: 'Did minimum required'
            },
            {
                range: '5-6',
                desc: 'Interested'
            },
            {
                range: '7-8',
                desc: 'Proactive, research done'
            },
            {
                range: '9-10',
                desc: 'Highly driven, overflowing energy'
            }
        ]
    }
];
const QUESTION_BANK = {
    'Ice Breakers & Intro': [
        "Tell us something about yourself that isn't on your resume.",
        "If you could have any superpower, what would it be and why?",
        "What's the last interesting thing you read or watched?",
        "Describe your ideal weekend.",
        "Which fictional character do you relate to the most?"
    ],
    'Motivation & IEEE Fit': [
        "Why specifically IEEE SBNU over other clubs?",
        "What do you hope to gain from this technical team in 1 year?",
        "If you were selected, what is the FIRST thing you'd want to work on?",
        "How do you prioritize college academics vs club work?",
        "Tell us about a time you volunteered for something voluntarily."
    ],
    'General Technical (All Tracks)': [
        "Explain the internet to a 5-year-old.",
        "How do you approach a bug you can't solve for hours?",
        "What is your favorite shortcut or tool that makes you productive?",
        "Walk us through how you built your most recent project.",
        "Tech changes fast. How do you keep up?",
        "Rank these: Code Quality, Speed of Delivery, User Experience. Why?"
    ],
    'Technical: Web Development': [
        "Difference between usage of <div>, <span>, and <section>?",
        "What is the Box Model in CSS?",
        "Explain 'Responsive Design' without saying 'mobile friendly'.",
        "Why is React/Next.js popular compared to plain HTML/JS?",
        "What is an API? How does a frontend 'talk' to a backend?",
        "How would you optimize a slow-loading website?",
        "What are Cookies vs LocalStorage?",
        "SQL vs NoSQL: When to use which?",
        "Authentication vs Authorization - what's the difference?"
    ],
    'Technical: AI / ML / Data Science': [
        "What is the difference between AI, ML, and Deep Learning?",
        "Explain Overfitting vs Underfitting like I'm a layman.",
        "Supervised vs Unsupervised learning - give real world examples.",
        "How would you explain a Neural Network to your grandmother?",
        "What are the ethical concerns of AI today?",
        "Why do we need to split data into Training and Testing sets?",
        "Python vs R vs C++ for AI? Thoughts."
    ],
    'Creative & Design': [
        "What makes a 'Bad' User Interface?",
        "How do you decide on a color palette for a project?",
        "Figma vs Adobe XD vs Pen & Paper - what's your process?",
        "Critique the design of the current IEEE website (hypothetically).",
        "How do you handle feedback that says 'I hate this design'?",
        "Explain the difference between Vector and Raster images.",
        "What is visual hierarchy?"
    ],
    'Editor & Content': [
        "What is the difference between 'editing' and 'proofreading'?",
        "How do you make a boring technical topic interesting to read?",
        "Draft a 2-line catchy caption for an upcoming AI Workshop.",
        "Check this sentence for grammar: 'Me and him went to the hackathon.'",
        "How do you handle writer's block when a deadline is approaching?",
        "What tools do you use for content creation? (ChatGPT, Grammarly, etc.)"
    ],
    'Social Media': [
        "How does the Instagram Algorithm work (in your opinion)?",
        "Reels vs Posts vs Stories: How would you use them for an event promotion?",
        "How do you handle negative comments on a post?",
        "What is a 'Call to Action' (CTA)? Give an example.",
        "What metrics matter most? Likes, Shares, or Saves?",
        "Plan a 1-week social media campaign for a recruitment drive."
    ],
    'Membership, Marketing & Sponsorship (MDSO)': [
        "How would you pitch IEEE SBNU to a potential sponsor?",
        "Convince a 1st year student to join IEEE with just 3 sentences.",
        "What value does a sponsor get from supporting a college event?",
        "How would you increase event attendance if registrations are low?",
        "Coldcalling vs Emailing: Which is better for sponsorship and why?",
        "Draft a generic sponsorship email subject line that gets opened."
    ],
    'Situational & Behavioural': [
        "You have an exam tomorrow but a critical server bug today. What do you do?",
        "Describe a conflict you had in a team and how YOU resolved it.",
        "Would you rather be a leader who is feared or a leader who is loved?",
        "You made a mistake that deleted user data. How do you tell the lead?",
        "Your teammate is taking credit for your code. How do you handle it?"
    ],
    'Integrity & Values': [
        "Did you use ChatGPT/AI for your application answers? Be honest.",
        "What is one thing you don't know but are pretending to know?",
        "If you realize you can't finish a task by the deadline, when do you tell us?",
        "Have you ever broken a rule to get something done? Was it worth it?"
    ]
};
const TAG_OPTIONS = {
    positive: [
        'Strong Learner',
        'Leadership Potential',
        'Creative Thinker',
        'Reliable',
        'Calm Problem Solver',
        'Tech Wizard',
        'Good Communicator'
    ],
    negative: [
        'Ego Issue',
        'Copy-Paste Mindset',
        'Unreliable Tone',
        'Only-Certificate',
        'Passive',
        'Argumentative',
        'Low Availability'
    ]
};
}),
"[project]/src/lib/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0021630a570ad3848b0a9b5688e35055b425981489":"getMembers","0062730dbe6c1768ecf3b80b4b6e731a6bf4c8b111":"getUsers","00930f876956f640fcaac50774ac64fc1f2cc1dd01":"resetDatabase","00b8f1b8a5d5ea76f16d1d9108fc3a36fc9871c596":"getDepartments","00c841e8bb8a0c284f6b23b32ba52286005715e165":"getQuestions","00e8f88fe75c5a20d50e6b60cb728b2322acbf5c76":"getCandidates","400a41db44d13130489563a104342c6c46ed70eaeb":"addMember","4016c757533c22a159437ba1abb8a33b52fad2fb09":"addDepartment","4040634522dfc711cbe6e69301736a194b905d5c62":"deleteCandidate","404c02cf11906e391c778f3b4b6f437e066cd22fa0":"getCandidate","4054adef7d27212948087d51169d01b03e2bb563d8":"addCandidates","406d3f64f2bffabbf241f3605ed2bcb5858c9222ee":"getMember","40a08476736c9207386f3b5df0dec530dd61fd2bc3":"deleteDepartment","40b2a0f2dfc825222e015dd38ed435220c4e012e26":"resetCandidate","40e06f31c2fe004995347b981031f37b865938b1a6":"deleteMember","6078ecce42591b105f5c7ec07269ee638754c1330c":"updateCandidateDetails","60a0b9df2ee4e34886f1f0273a5747523d535cb8e7":"updateQuestions","60a672d3dfc8e52f899290cc4cddea51374a6bd69f":"updateMember","60a7286543c44156fe67fd38fc1b68a801e606037e":"renameDepartment","60e0e7cf51e16f112a3b17274520777b6b9954ae5c":"updateCandidateTags","60f8d08d4e64905806d39cb526408d4a6590ee76d6":"updateCandidateStatus","60f970f54a3b208bf42c232c0a1b35ac3f4ab44641":"updateCandidateNotes","70261150cef95359df2310e8bad495d18d9cf4baa8":"submitScore"},"",""] */ __turbopack_context__.s([
    "addCandidates",
    ()=>addCandidates,
    "addDepartment",
    ()=>addDepartment,
    "addMember",
    ()=>addMember,
    "deleteCandidate",
    ()=>deleteCandidate,
    "deleteDepartment",
    ()=>deleteDepartment,
    "deleteMember",
    ()=>deleteMember,
    "getCandidate",
    ()=>getCandidate,
    "getCandidates",
    ()=>getCandidates,
    "getDepartments",
    ()=>getDepartments,
    "getMember",
    ()=>getMember,
    "getMembers",
    ()=>getMembers,
    "getQuestions",
    ()=>getQuestions,
    "getUsers",
    ()=>getUsers,
    "renameDepartment",
    ()=>renameDepartment,
    "resetCandidate",
    ()=>resetCandidate,
    "resetDatabase",
    ()=>resetDatabase,
    "submitScore",
    ()=>submitScore,
    "updateCandidateDetails",
    ()=>updateCandidateDetails,
    "updateCandidateNotes",
    ()=>updateCandidateNotes,
    "updateCandidateStatus",
    ()=>updateCandidateStatus,
    "updateCandidateTags",
    ()=>updateCandidateTags,
    "updateMember",
    ()=>updateMember,
    "updateQuestions",
    ()=>updateQuestions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dbConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dbConfig.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/models.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
// Helper to ensure connection
async function db() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dbConfig$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
}
async function getDepartments() {
    await db();
    const depts = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DepartmentModel"].find({}).lean();
    return depts.map((d)=>({
            ...d,
            _id: d._id.toString()
        }));
}
async function addDepartment(name) {
    await db();
    const id = `dept_${name.toLowerCase().replace(/\s+/g, '_')}`;
    const exists = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DepartmentModel"].findOne({
        id
    });
    if (exists) return;
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DepartmentModel"].create({
        id,
        name
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/members/add');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/candidates/add');
}
async function renameDepartment(id, newName) {
    await db();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DepartmentModel"].findOneAndUpdate({
        id
    }, {
        name: newName
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/members/add');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/candidates/add');
}
async function deleteDepartment(id) {
    await db();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DepartmentModel"].deleteOne({
        id
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
async function getUsers() {
    await db();
    const users = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserModel"].find({}).lean();
    return users.map((u)=>({
            id: u.id,
            name: u.name,
            email: u.email,
            passwordHash: u.passwordHash,
            role: u.role,
            departmentId: u.departmentId
        }));
}
async function getCandidates() {
    await db();
    const candidates = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CandidateModel"].find({}).lean();
    // Map _id and dates if necessary, though lean() is mostly POJO.
    // We used a custom 'id' string field, so we rely on that.
    return candidates.map((c)=>({
            ...c,
            _id: c._id.toString(),
            createdAt: c.createdAt ? c.createdAt.toISOString() : undefined,
            interviewStartTime: c.interviewStartTime,
            // Ensure departmentScores is a plain object
            departmentScores: c.departmentScores ? c.departmentScores instanceof Map ? Object.fromEntries(c.departmentScores) : c.departmentScores : {}
        }));
}
async function getCandidate(id) {
    await db();
    const candidate = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CandidateModel"].findOne({
        id
    }).lean();
    if (!candidate) return undefined;
    return {
        ...candidate,
        _id: candidate._id.toString(),
        createdAt: candidate.createdAt?.toISOString()
    };
}
async function addCandidates(newCandidates) {
    await db();
    // 1. Extract emails and roll numbers from the new batch to check against DB
    const emails = newCandidates.map((c)=>c.email).filter((e)=>e);
    const rollNos = newCandidates.map((c)=>c.rollNo).filter((r)=>r);
    // 2. Find existing candidates that match either email OR roll number
    const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CandidateModel"].find({
        $or: [
            {
                email: {
                    $in: emails
                }
            },
            {
                rollNo: {
                    $in: rollNos
                }
            }
        ]
    }).select('email rollNo').lean();
    const existingEmails = new Set(existing.map((c)=>c.email));
    const existingRollNos = new Set(existing.map((c)=>c.rollNo));
    // 3. Filter out duplicates
    const finalToAdd = newCandidates.filter((c)=>{
        const emailExists = c.email && existingEmails.has(c.email);
        const rollExists = c.rollNo && existingRollNos.has(c.rollNo);
        return !emailExists && !rollExists;
    });
    if (finalToAdd.length > 0) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CandidateModel"].insertMany(finalToAdd);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/candidates');
    return {
        added: finalToAdd.length,
        skipped: newCandidates.length - finalToAdd.length
    };
}
async function updateCandidateStatus(id, status) {
    await db();
    const update = {
        status
    };
    if (status === 'In-Progress') {
    // Only set start time if not set? Or always? Logic in previous was: if not set.
    // But doing it atomically in Mongo is harder in one go without fetching.
    // Let's fetch first.
    }
    const candidate = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CandidateModel"].findOne({
        id
    });
    if (candidate) {
        candidate.status = status;
        if (status === 'In-Progress' && !candidate.interviewStartTime) {
            candidate.set('interviewStartTime', new Date().toISOString());
        }
        await candidate.save();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/candidates');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/interview/${id}`);
    }
}
async function submitScore(id, role, score) {
    await db();
    const candidate = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CandidateModel"].findOne({
        id
    });
    if (candidate) {
        // Init scores if null (handled by Schema default usually, but robust check)
        if (!candidate.scores) candidate.scores = {
            interviewer1: null,
            interviewer2: null
        };
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
        let finalRatingForTrack = score.finalRating || score.total / 5;
        // Only average with partner if they are ALSO from the same track
        if (s2 && s2.interviewerDomain === track) {
            trackAverage = (score.total + s2.total) / 2;
            const r2 = s2.finalRating || s2.total / 5;
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/interview/${id}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/candidates');
    }
}
async function updateCandidateNotes(id, notes) {
    await db();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CandidateModel"].findOneAndUpdate({
        id
    }, {
        notes
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/interview/${id}`);
}
async function updateCandidateTags(id, tags) {
    await db();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CandidateModel"].findOneAndUpdate({
        id
    }, {
        tags
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/interview/${id}`);
}
async function deleteCandidate(id) {
    await db();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CandidateModel"].deleteOne({
        id
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/candidates');
}
async function updateCandidateDetails(id, data) {
    await db();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CandidateModel"].findOneAndUpdate({
        id
    }, {
        $set: data
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/candidates');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/interview/${id}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/reports/${id}`);
}
async function getMembers() {
    await db();
    const users = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserModel"].find({}).lean();
    // We map Users to Members structure (since they are basically the same in this app)
    // Or did we store extra data on Member?
    // Looking at types.ts: Member extends User.
    // In db.json, they were separate arrays.
    // We will just fetch Users and map them to Member[] to simplify, OR fetch specific member collection if we want.
    // Let's stick to using UserModel as the source of truth for Members too, to normalize data.
    return users.map((u)=>({
            id: u.id,
            name: u.name,
            email: u.email,
            passwordHash: u.passwordHash,
            role: u.role,
            departmentId: u.departmentId,
            status: 'Active',
            startDate: new Date().toISOString() // Mock fields if missing
        }));
}
async function addMember(member) {
    await db();
    // Check if exists
    const exists = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserModel"].findOne({
        email: member.email
    });
    if (exists) return;
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserModel"].create({
        id: member.id,
        name: member.name,
        email: member.email,
        passwordHash: member.passwordHash || 'ieee123',
        role: member.role,
        departmentId: member.departmentId
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/members');
}
async function getMember(id) {
    await db();
    const u = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserModel"].findOne({
        id
    }).lean();
    if (!u) return undefined;
    return {
        id: u.id,
        name: u.name,
        email: u.email,
        passwordHash: u.passwordHash,
        role: u.role,
        departmentId: u.departmentId,
        status: 'Active',
        startDate: ''
    };
}
async function updateMember(id, data) {
    await db();
    // Find User by ID first, or Email
    // Updating UserModel
    const updatePayload = {};
    if (data.name) updatePayload.name = data.name;
    if (data.email) updatePayload.email = data.email;
    if (data.role) updatePayload.role = data.role;
    if (data.departmentId) updatePayload.departmentId = data.departmentId;
    if (data.passwordHash) updatePayload.passwordHash = data.passwordHash;
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserModel"].findOneAndUpdate({
        id
    }, {
        $set: updatePayload
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/members');
}
async function deleteMember(id) {
    await db();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserModel"].deleteOne({
        id
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/members');
}
async function getQuestions() {
    await db();
    const questions = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["QuestionModel"].find({}).lean();
    if (questions.length === 0) {
        // Seed
        const initialData = __turbopack_context__.r("[project]/src/lib/data.ts [app-rsc] (ecmascript)").QUESTION_BANK;
        // Insert keys as categories
        const payload = Object.entries(initialData).map(([k, v])=>({
                category: k,
                questions: v
            }));
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["QuestionModel"].insertMany(payload);
        return initialData;
    }
    // Convert array back to object: { category: [q1, q2] }
    const result = {};
    questions.forEach((q)=>{
        result[q.category] = q.questions;
    });
    return result;
}
async function updateQuestions(category, newQuestions) {
    await db();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["QuestionModel"].findOneAndUpdate({
        category
    }, {
        questions: newQuestions
    }, {
        upsert: true
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/qbank');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/interview/[id]', 'page');
}
async function resetCandidate(id) {
    await db();
    const candidate = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CandidateModel"].findOne({
        id
    });
    if (candidate) {
        candidate.status = 'Pending';
        // Reset scores
        candidate.scores = {
            interviewer1: null,
            interviewer2: null
        };
        candidate.averageScore = 0;
        candidate.finalRatingAverage = 0;
        candidate.recommendation = undefined;
        // Optional: Add a note or keep existing notes
        candidate.notes = (candidate.notes || '') + '\n[System] Interview reset by Admin on ' + new Date().toLocaleString();
        // Because 'scores' is Mixed type, mark as modified
        candidate.markModified('scores');
        await candidate.save();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/candidates');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/interview/${id}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/reports/${id}`);
    }
}
async function resetDatabase() {
    await db();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CandidateModel"].deleteMany({});
    // We typically don't delete Users/Depts in reset, just candidates?
    // The previous code: db.candidates = [], db.members = []
    // So we delete Candidates and Users (except Admin).
    // Let's safe-delete: Keep SuperAdmin.
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserModel"].deleteMany({
        role: {
            $ne: 'SuperAdmin'
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getDepartments,
    addDepartment,
    renameDepartment,
    deleteDepartment,
    getUsers,
    getCandidates,
    getCandidate,
    addCandidates,
    updateCandidateStatus,
    submitScore,
    updateCandidateNotes,
    updateCandidateTags,
    deleteCandidate,
    updateCandidateDetails,
    getMembers,
    addMember,
    getMember,
    updateMember,
    deleteMember,
    getQuestions,
    updateQuestions,
    resetCandidate,
    resetDatabase
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDepartments, "00b8f1b8a5d5ea76f16d1d9108fc3a36fc9871c596", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addDepartment, "4016c757533c22a159437ba1abb8a33b52fad2fb09", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(renameDepartment, "60a7286543c44156fe67fd38fc1b68a801e606037e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteDepartment, "40a08476736c9207386f3b5df0dec530dd61fd2bc3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUsers, "0062730dbe6c1768ecf3b80b4b6e731a6bf4c8b111", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCandidates, "00e8f88fe75c5a20d50e6b60cb728b2322acbf5c76", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCandidate, "404c02cf11906e391c778f3b4b6f437e066cd22fa0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addCandidates, "4054adef7d27212948087d51169d01b03e2bb563d8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCandidateStatus, "60f8d08d4e64905806d39cb526408d4a6590ee76d6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitScore, "70261150cef95359df2310e8bad495d18d9cf4baa8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCandidateNotes, "60f970f54a3b208bf42c232c0a1b35ac3f4ab44641", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCandidateTags, "60e0e7cf51e16f112a3b17274520777b6b9954ae5c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCandidate, "4040634522dfc711cbe6e69301736a194b905d5c62", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCandidateDetails, "6078ecce42591b105f5c7ec07269ee638754c1330c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getMembers, "0021630a570ad3848b0a9b5688e35055b425981489", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addMember, "400a41db44d13130489563a104342c6c46ed70eaeb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getMember, "406d3f64f2bffabbf241f3605ed2bcb5858c9222ee", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateMember, "60a672d3dfc8e52f899290cc4cddea51374a6bd69f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteMember, "40e06f31c2fe004995347b981031f37b865938b1a6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuestions, "00c841e8bb8a0c284f6b23b32ba52286005715e165", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateQuestions, "60a0b9df2ee4e34886f1f0273a5747523d535cb8e7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(resetCandidate, "40b2a0f2dfc825222e015dd38ed435220c4e012e26", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(resetDatabase, "00930f876956f640fcaac50774ac64fc1f2cc1dd01", null);
}),
"[project]/.next-internal/server/app/reports/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/reports/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "001bb0ba4210b29726330c4e1e2d075df975a790bc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSession"],
    "0021630a570ad3848b0a9b5688e35055b425981489",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMembers"],
    "0062730dbe6c1768ecf3b80b4b6e731a6bf4c8b111",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUsers"],
    "0087b5fed3aa26e6841e7effaa4c9fa9af97398306",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"],
    "00930f876956f640fcaac50774ac64fc1f2cc1dd01",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resetDatabase"],
    "00b8f1b8a5d5ea76f16d1d9108fc3a36fc9871c596",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDepartments"],
    "00c841e8bb8a0c284f6b23b32ba52286005715e165",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getQuestions"],
    "00e8f88fe75c5a20d50e6b60cb728b2322acbf5c76",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCandidates"],
    "400a41db44d13130489563a104342c6c46ed70eaeb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addMember"],
    "4016c757533c22a159437ba1abb8a33b52fad2fb09",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDepartment"],
    "4040634522dfc711cbe6e69301736a194b905d5c62",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCandidate"],
    "404c02cf11906e391c778f3b4b6f437e066cd22fa0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCandidate"],
    "4054adef7d27212948087d51169d01b03e2bb563d8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addCandidates"],
    "406d3f64f2bffabbf241f3605ed2bcb5858c9222ee",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMember"],
    "40a08476736c9207386f3b5df0dec530dd61fd2bc3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteDepartment"],
    "40b2a0f2dfc825222e015dd38ed435220c4e012e26",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resetCandidate"],
    "40e06f31c2fe004995347b981031f37b865938b1a6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteMember"],
    "6078ecce42591b105f5c7ec07269ee638754c1330c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCandidateDetails"],
    "60a0b9df2ee4e34886f1f0273a5747523d535cb8e7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateQuestions"],
    "60a672d3dfc8e52f899290cc4cddea51374a6bd69f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateMember"],
    "60a7286543c44156fe67fd38fc1b68a801e606037e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renameDepartment"],
    "60dd838e6449692fbb0e5f4a2d832ee2630c20d4cc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["login"],
    "60e0e7cf51e16f112a3b17274520777b6b9954ae5c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCandidateTags"],
    "60f8d08d4e64905806d39cb526408d4a6590ee76d6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCandidateStatus"],
    "60f970f54a3b208bf42c232c0a1b35ac3f4ab44641",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCandidateNotes"],
    "70261150cef95359df2310e8bad495d18d9cf4baa8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitScore"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$reports$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/reports/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_5ef24d42._.js.map