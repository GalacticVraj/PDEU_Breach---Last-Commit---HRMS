module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
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
"[project]/src/app/guide/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScoringGuidePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-rsc] (ecmascript)");
;
;
function ScoringGuidePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-slate-900",
                        children: "Scoring Guide"
                    }, void 0, false, {
                        fileName: "[project]/src/app/guide/page.tsx",
                        lineNumber: 7,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-500",
                        children: "Refrence for consistent evaluation."
                    }, void 0, false, {
                        fileName: "[project]/src/app/guide/page.tsx",
                        lineNumber: 8,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/guide/page.tsx",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-8",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SCORING_RUBRIC"].map((rubric)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-4 bg-slate-900 text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-bold text-lg",
                                            children: rubric.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/guide/page.tsx",
                                            lineNumber: 16,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs bg-white/20 px-2 py-1 rounded",
                                            children: [
                                                "Max Score: ",
                                                rubric.max
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/guide/page.tsx",
                                            lineNumber: 17,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/guide/page.tsx",
                                    lineNumber: 15,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/guide/page.tsx",
                                lineNumber: 14,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                    children: rubric.guide.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-50 p-4 rounded-lg border border-slate-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-xl font-bold text-blue-600 mb-1",
                                                    children: g.range
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/guide/page.tsx",
                                                    lineNumber: 24,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-slate-700",
                                                    children: g.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/guide/page.tsx",
                                                    lineNumber: 25,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, g.range, true, {
                                            fileName: "[project]/src/app/guide/page.tsx",
                                            lineNumber: 23,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/guide/page.tsx",
                                    lineNumber: 21,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/guide/page.tsx",
                                lineNumber: 20,
                                columnNumber: 25
                            }, this)
                        ]
                    }, rubric.category, true, {
                        fileName: "[project]/src/app/guide/page.tsx",
                        lineNumber: 13,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/guide/page.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-blue-50 border border-blue-100 rounded-xl p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-blue-900 mb-4",
                        children: "Total Score Meaning"
                    }, void 0, false, {
                        fileName: "[project]/src/app/guide/page.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-5 gap-4 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-bold text-lg text-slate-900",
                                        children: "70–80"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/guide/page.tsx",
                                        lineNumber: 37,
                                        columnNumber: 42
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-500 uppercase tracking-wide font-semibold",
                                        children: "Exceptional"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/guide/page.tsx",
                                        lineNumber: 37,
                                        columnNumber: 103
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/guide/page.tsx",
                                lineNumber: 37,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-bold text-lg text-slate-900",
                                        children: "60–69"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/guide/page.tsx",
                                        lineNumber: 38,
                                        columnNumber: 42
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-500 uppercase tracking-wide font-semibold",
                                        children: "Strong"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/guide/page.tsx",
                                        lineNumber: 38,
                                        columnNumber: 103
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/guide/page.tsx",
                                lineNumber: 38,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-bold text-lg text-slate-900",
                                        children: "50–59"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/guide/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 42
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-500 uppercase tracking-wide font-semibold",
                                        children: "Good"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/guide/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 103
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/guide/page.tsx",
                                lineNumber: 39,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-bold text-lg text-slate-900",
                                        children: "40–49"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/guide/page.tsx",
                                        lineNumber: 40,
                                        columnNumber: 42
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-500 uppercase tracking-wide font-semibold",
                                        children: "Average"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/guide/page.tsx",
                                        lineNumber: 40,
                                        columnNumber: 103
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/guide/page.tsx",
                                lineNumber: 40,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-bold text-lg text-slate-900",
                                        children: "<40"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/guide/page.tsx",
                                        lineNumber: 41,
                                        columnNumber: 42
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-500 uppercase tracking-wide font-semibold",
                                        children: "Weak Fit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/guide/page.tsx",
                                        lineNumber: 41,
                                        columnNumber: 104
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/guide/page.tsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/guide/page.tsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/guide/page.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/guide/page.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/guide/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/guide/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2546d65d._.js.map