'use client';

import { useState, useEffect } from 'react';
import { ScoreSheet, InterviewerRole, Recommendation, RoleUnderstanding } from '@/lib/types';
import { Lock, Unlock, CheckCircle, ThumbsUp, ThumbsDown, User, Star, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { submitScore } from '@/lib/actions';

interface Props {
    candidateId: string;
    role: InterviewerRole;
    existingScore: ScoreSheet | null;
    isLocked: boolean;
    interviewerName: string;
    confirmedTrack: string;
}

export function ScoringPanel({ candidateId, role, existingScore, isLocked: initialLocked, interviewerName, confirmedTrack }: Props) {
    const [scores, setScores] = useState({
        communication: existingScore?.communication || 0,
        technical: existingScore?.technical || 0,
        leadership: existingScore?.leadership || 0,
        teamwork: existingScore?.teamwork || 0,
        initiative: existingScore?.initiative || 0,
    });

    // Details
    const [interviewerPos, setInterviewerPos] = useState(existingScore?.interviewerPosition || '');
    const [interviewerDomain, setInterviewerDomain] = useState(existingScore?.interviewerDomain || confirmedTrack);

    // Qualitative
    const [roleUnderstanding, setRoleUnderstanding] = useState<RoleUnderstanding | undefined>(existingScore?.roleUnderstanding);
    const [roleUnderstandingComments, setRoleUnderstandingComments] = useState(existingScore?.roleUnderstandingComments || '');
    const [strengths, setStrengths] = useState(existingScore?.strengths || '');
    const [improvements, setImprovements] = useState(existingScore?.improvements || '');
    const [vision, setVision] = useState(existingScore?.vision || '');
    const [behavioralResponse, setBehavioralResponse] = useState(existingScore?.behavioralResponse || '');
    const [selectionReason, setSelectionReason] = useState(existingScore?.selectionReason || '');
    const [rejectionReason, setRejectionReason] = useState(existingScore?.rejectionReason || '');
    const [feedback, setFeedback] = useState(existingScore?.feedback || '');

    const [recommendation, setRecommendation] = useState<Recommendation | undefined>(existingScore?.recommendation);

    const total = scores.communication + scores.technical + scores.leadership + scores.teamwork + scores.initiative;
    const finalRating = parseFloat((total / 5).toFixed(1)); // /10

    const [locked, setLocked] = useState(initialLocked);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState<'assessment' | 'skills' | 'final'>('skills');

    useEffect(() => {
        if (existingScore) {
            setLocked(true);
        }
    }, [existingScore]);

    const handleSubmit = async () => {
        if (!interviewerName.trim()) {
            alert('Please enter your name at the top first.');
            return;
        }
        if (!interviewerPos.trim() || !interviewerDomain.trim()) {
            alert('Please enter your Position and Domain in the "Qualitative" tab.');
            setActiveTab('assessment');
            return;
        }
        if (!recommendation) {
            alert('Please select a Recommendation level.');
            setActiveTab('final');
            return;
        }
        if (!confirm('Lock assessment? This cannot be undone.')) return;

        setLoading(true);

        const sheet: ScoreSheet = {
            ...scores,
            total,
            interviewerName,
            interviewerPosition: interviewerPos,
            interviewerDomain,
            roleUnderstanding,
            roleUnderstandingComments,
            strengths,
            improvements,
            vision,
            behavioralResponse,
            selectionReason,
            rejectionReason,
            feedback,
            recommendation,
            finalRating,
            date: new Date().toLocaleDateString()
        };

        await submitScore(candidateId, role, sheet);
        setLocked(true);
        setLoading(false);
    };

    // Helper for 0-10 Buttons
    const ScoreButtons = ({ value, onChange, disabled }: { value: number, onChange: (v: number) => void, disabled: boolean }) => (
        <div className="grid grid-cols-11 gap-1 mt-2">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => {
                let colorClass = "bg-slate-50 text-slate-400 hover:bg-slate-200";
                if (value === v) {
                    if (v <= 3) colorClass = "bg-red-500 text-white";
                    else if (v <= 7) colorClass = "bg-amber-500 text-white";
                    else colorClass = "bg-green-600 text-white";
                }
                return (
                    <button
                        key={v}
                        disabled={disabled}
                        onClick={() => onChange(v)}
                        type="button"
                        className={cn(
                            "h-10 rounded font-bold text-sm transition-all active:scale-95",
                            colorClass,
                            disabled && value !== v && "opacity-10",
                            value === v && "ring-2 ring-offset-1 ring-slate-900 z-10 scale-110 shadow-md"
                        )}
                    >
                        {v}
                    </button>
                );
            })}
        </div>
    );

    const TabBtn = ({ id, label, icon: Icon }: any) => (
        <button
            onClick={() => setActiveTab(id)}
            className={cn(
                "flex-1 py-3 text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-colors",
                activeTab === id ? "border-blue-600 text-blue-600 bg-blue-50" : "border-transparent text-slate-500 hover:bg-slate-50"
            )}
        >
            <Icon size={16} /> {label}
        </button>
    );

    if (locked) {
        return (
            <div className="bg-white rounded-xl shadow border border-slate-200 p-8 flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle size={40} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Assessment Locked</h2>
                <p className="text-slate-500">You have successfully submitted your evaluation for this candidate.</p>
                <div className="bg-slate-50 rounded-lg p-4 w-full max-w-xs border border-slate-200 mt-4">
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-500 font-bold uppercase">Total Score</span>
                        <span className="font-bold text-slate-900">{total} / 50</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-500 font-bold uppercase">Rating</span>
                        <span className="font-bold text-blue-600 text-lg">{finalRating} / 10</span>
                    </div>
                    <div className="pt-2 border-t border-slate-200 mt-2">
                        <span className={cn(
                            "inline-block px-3 py-1 rounded-full text-xs font-bold uppercase",
                            recommendation === 'Strongly Recommend' ? "bg-green-100 text-green-700" :
                                recommendation === 'Recommend' ? "bg-blue-100 text-blue-700" :
                                    recommendation === 'Consider if Required' ? "bg-amber-100 text-amber-700" :
                                        "bg-red-100 text-red-700"
                        )}>
                            {recommendation}
                        </span>
                    </div>
                </div>

                <button
                    onClick={() => {
                        if (confirm('Review Mode: Unlocking this score will allow you to overwrite the previous submission. Proceed?')) {
                            setLocked(false);
                        }
                    }}
                    className="mt-6 flex items-center gap-2 text-sm text-slate-400 hover:text-red-500 transition-colors"
                >
                    <Unlock size={14} /> Edit / Review Submission
                </button>
            </div>
        )
    }

    return (
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 flex flex-col h-[calc(100vh-8rem)] overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-slate-200 bg-white">
                <TabBtn id="assessment" label="Qualitative" icon={User} />
                <TabBtn id="skills" label="Scoring" icon={Star} />
                <TabBtn id="final" label="Decision" icon={ThumbsUp} />
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50">

                {/* 1. SKILLS SCORING TAB */}
                {activeTab === 'skills' && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div>
                            <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-600 mb-6">
                                <h3 className="font-bold text-slate-900 mb-2">Scoring Guidelines (1-10)</h3>
                                <ul className="list-disc pl-4 space-y-1">
                                    <li><strong>1-3 (Poor):</strong> Lacks basic understanding or capability.</li>
                                    <li><strong>4-6 (Average):</strong> Meets basic expectations but lacks depth.</li>
                                    <li><strong>7-8 (Good):</strong> Strong understanding, shows promise.</li>
                                    <li><strong>9-10 (Excellent):</strong> Exceptional, exceeds expectations significantly.</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <label className="font-bold text-slate-700">Communication Skills</label>
                                <span className="font-bold text-lg text-slate-900">{scores.communication}</span>
                            </div>
                            <ScoreButtons value={scores.communication} onChange={v => setScores({ ...scores, communication: v })} disabled={locked} />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <label className="font-bold text-slate-700">Technical / Domain Knowledge</label>
                                <span className="font-bold text-lg text-slate-900">{scores.technical}</span>
                            </div>
                            <ScoreButtons value={scores.technical} onChange={v => setScores({ ...scores, technical: v })} disabled={locked} />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <label className="font-bold text-slate-700">Leadership Potential</label>
                                <span className="font-bold text-lg text-slate-900">{scores.leadership}</span>
                            </div>
                            <ScoreButtons value={scores.leadership} onChange={v => setScores({ ...scores, leadership: v })} disabled={locked} />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <label className="font-bold text-slate-700">Teamwork & Collaboration</label>
                                <span className="font-bold text-lg text-slate-900">{scores.teamwork}</span>
                            </div>
                            <ScoreButtons value={scores.teamwork} onChange={v => setScores({ ...scores, teamwork: v })} disabled={locked} />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <label className="font-bold text-slate-700">Initiative & Enthusiasm</label>
                                <span className="font-bold text-lg text-slate-900">{scores.initiative}</span>
                            </div>
                            <ScoreButtons value={scores.initiative} onChange={v => setScores({ ...scores, initiative: v })} disabled={locked} />
                        </div>

                        <div className="p-4 bg-blue-50 rounded-lg flex justify-between items-center border border-blue-100">
                            <span className="text-blue-800 font-bold uppercase text-sm">Total Score</span>
                            <span className="text-3xl font-extrabold text-blue-700">{total} <span className="text-sm font-medium text-blue-400">/ 50</span></span>
                        </div>

                        <button onClick={() => setActiveTab('assessment')} className="w-full py-3 bg-slate-800 text-white rounded-lg font-bold hover:bg-slate-700 transition-colors">
                            Next: Qualitative Assessment
                        </button>
                    </div>
                )}


                {/* 2. QUALITATIVE ASSESSMENT TAB */}
                {activeTab === 'assessment' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        {/* Interviewer Details Inputs */}
                        <div className="grid grid-cols-2 gap-4 border-b pb-4">
                            <div>
                                <label className="block text-xs uppercase font-bold text-slate-500 mb-1">Your Position</label>
                                <input className="w-full p-2 text-sm border rounded bg-white" placeholder="e.g. Chairperson" value={interviewerPos} onChange={e => setInterviewerPos(e.target.value)} />
                            </div>
                            <div>
                                <label className="block text-xs uppercase font-bold text-slate-500 mb-1">Domain/Committee</label>
                                <input className="w-full p-2 text-sm border rounded bg-white" placeholder="e.g. Technical" value={interviewerDomain} onChange={e => setInterviewerDomain(e.target.value)} />
                            </div>
                        </div>

                        {/* Role Understanding */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Understanding of Role</label>
                            <div className="grid grid-cols-2 gap-2 mb-2">
                                {['Excellent', 'Good', 'Average', 'Needs Improvement'].map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => setRoleUnderstanding(opt as RoleUnderstanding)}
                                        className={cn(
                                            "py-2 text-xs font-bold rounded border transition-all",
                                            roleUnderstanding === opt
                                                ? "bg-slate-800 text-white border-slate-800"
                                                : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                                        )}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                            <input className="w-full p-2 text-sm border rounded bg-white" placeholder="Brief comments..." value={roleUnderstandingComments} onChange={e => setRoleUnderstandingComments(e.target.value)} />
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label className="block text-xs uppercase font-bold text-slate-500 mb-1">Strengths Observed</label>
                                <textarea rows={2} className="w-full p-2 text-sm border rounded bg-white" placeholder="Key strengths..." value={strengths} onChange={e => setStrengths(e.target.value)} />
                            </div>
                            <div>
                                <label className="block text-xs uppercase font-bold text-slate-500 mb-1">Areas of Improvement</label>
                                <textarea rows={2} className="w-full p-2 text-sm border rounded bg-white" placeholder="Weaknesses..." value={improvements} onChange={e => setImprovements(e.target.value)} />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs uppercase font-bold text-slate-500 mb-1">Candidate's Vision</label>
                            <textarea rows={2} className="w-full p-2 text-sm border rounded bg-white" placeholder="Plans for IEEE..." value={vision} onChange={e => setVision(e.target.value)} />
                        </div>
                        <div>
                            <label className="block text-xs uppercase font-bold text-slate-500 mb-1">Behavioral Response</label>
                            <textarea rows={2} className="w-full p-2 text-sm border rounded bg-white" placeholder="Situational handling..." value={behavioralResponse} onChange={e => setBehavioralResponse(e.target.value)} />
                        </div>

                        <button onClick={() => setActiveTab('final')} className="w-full py-3 bg-slate-800 text-white rounded-lg font-bold hover:bg-slate-700 transition-colors">
                            Next: Final Decision
                        </button>
                    </div>
                )}


                {/* 3. FINAL DECISION TAB */}
                {activeTab === 'final' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">

                        <div className="bg-white p-4 rounded-xl border shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <span className="font-bold text-slate-700">Calculated Rating</span>
                                <span className="font-bold text-2xl text-slate-900">{finalRating}/10</span>
                            </div>
                            <div>
                                <label className="block text-xs uppercase font-bold text-slate-500 mb-1">Why Select?</label>
                                <textarea rows={2} className="w-full p-2 text-sm border rounded bg-slate-50 focus:bg-white" placeholder="Justification..." value={selectionReason} onChange={e => setSelectionReason(e.target.value)} />
                            </div>
                            <div className="mt-2">
                                <label className="block text-xs uppercase font-bold text-slate-500 mb-1">Why Not Select?</label>
                                <textarea rows={2} className="w-full p-2 text-sm border rounded bg-slate-50 focus:bg-white" placeholder="Concerns..." value={rejectionReason} onChange={e => setRejectionReason(e.target.value)} />
                            </div>
                        </div>

                        {/* Recommendation Buttons - LARGE */}
                        <div>
                            <label className="block text-sm font-bold text-slate-900 mb-3 text-center uppercase tracking-wide">Final Recommendation</label>
                            <div className="grid grid-cols-1 gap-3">
                                <button
                                    onClick={() => setRecommendation('Strongly Recommend')}
                                    className={cn(
                                        "p-4 rounded-xl border-2 font-bold text-lg flex items-center justify-center gap-3 transition-all",
                                        recommendation === 'Strongly Recommend' ? "bg-green-100 border-green-500 text-green-700 shadow-md" : "bg-white border-green-100 text-green-600 hover:bg-green-50"
                                    )}
                                >
                                    <ThumbsUp /> Strongly Recommend
                                </button>
                                <button
                                    onClick={() => setRecommendation('Recommend')}
                                    className={cn(
                                        "p-4 rounded-xl border-2 font-bold text-lg flex items-center justify-center gap-3 transition-all",
                                        recommendation === 'Recommend' ? "bg-blue-100 border-blue-500 text-blue-700 shadow-md" : "bg-white border-blue-100 text-blue-600 hover:bg-blue-50"
                                    )}
                                >
                                    <CheckCircle /> Recommend
                                </button>
                                <button
                                    onClick={() => setRecommendation('Consider if Required')}
                                    className={cn(
                                        "p-4 rounded-xl border-2 font-bold text-lg flex items-center justify-center gap-3 transition-all",
                                        recommendation === 'Consider if Required' ? "bg-amber-100 border-amber-500 text-amber-700 shadow-md" : "bg-white border-amber-100 text-amber-600 hover:bg-amber-50"
                                    )}
                                >
                                    <AlertCircle /> Consider if Required
                                </button>
                                <button
                                    onClick={() => setRecommendation('Not Recommended')}
                                    className={cn(
                                        "p-4 rounded-xl border-2 font-bold text-lg flex items-center justify-center gap-3 transition-all",
                                        recommendation === 'Not Recommended' ? "bg-red-100 border-red-500 text-red-700 shadow-md" : "bg-white border-red-100 text-red-600 hover:bg-red-50"
                                    )}
                                >
                                    <ThumbsDown /> Not Recommended
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs uppercase font-bold text-slate-500 mb-1">Constructive Feedback (Well did / Improvements)</label>
                            <textarea rows={3} className="w-full p-2 text-sm border rounded bg-white" placeholder="What they did well & suggestions..." value={feedback} onChange={e => setFeedback(e.target.value)} />
                        </div>

                        <div className="pt-4 pb-8">
                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-xl hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 active:scale-95"
                            >
                                {loading ? 'Submitting...' : <><Lock size={20} /> Lock & Submit Assessment</>}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
