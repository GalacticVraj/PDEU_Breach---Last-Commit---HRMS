'use client';

import { Candidate, InterviewerRole } from '@/lib/types';
import { Timer } from './Timer';
import { ScoringPanel } from './ScoringPanel';
import { QuestionPanel } from './QuestionPanel';
import { TrackConfirmationModal } from './TrackConfirmationModal';
import { StatusBadge } from './StatusBadge';
import { useState, useEffect } from 'react';
import { updateCandidateNotes, updateCandidateStatus, updateCandidateTags } from '@/lib/actions';
import { Save, Tag as TagIcon, ArrowLeft, UserCircle, CheckCircle2, Edit3, X } from 'lucide-react';
import { TAG_OPTIONS } from '@/lib/data';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export function InterviewSession({ candidate, initialQuestionBank }: { candidate: Candidate; initialQuestionBank: Record<string, string[]> }) {
    // Basic state fallback
    const [questionBank] = useState(initialQuestionBank);
    const [role, setRole] = useState<InterviewerRole>('interviewer1');
    const [interviewerName, setInterviewerName] = useState('');
    const [isEditingName, setIsEditingName] = useState(false);

    const [notes, setNotes] = useState(candidate.notes || '');
    const [tags, setTags] = useState<string[]>(candidate.tags || []);
    const [showScorePanel, setShowScorePanel] = useState(true); // Toggles right panel
    const router = useRouter();

    // Responsive: On mount, check if mobile and hide panel by default
    useEffect(() => {
        if (window.innerWidth < 1024) {
            setShowScorePanel(false);
        }
    }, []);

    useEffect(() => {
        const savedRole = localStorage.getItem('interviewerRole');
        const savedName = localStorage.getItem('interviewerName');

        if (savedRole && (savedRole === 'interviewer1' || savedRole === 'interviewer2')) {
            setRole(savedRole as InterviewerRole);
        }
        if (savedName) {
            setInterviewerName(savedName);
        } else {
            setIsEditingName(true); // Prompt for name if not set
        }
    }, []);

    const handleNameSave = () => {
        if (interviewerName.trim()) {
            localStorage.setItem('interviewerName', interviewerName.trim());
            setIsEditingName(false);
        }
    };

    // Update status to 'In-Progress' on mount if still Pending
    useEffect(() => {
        if (candidate.status === 'Pending') {
            updateCandidateStatus(candidate.id, 'In-Progress');
        }
    }, [candidate.id, candidate.status]);

    const handleSaveNotes = async () => {
        await updateCandidateNotes(candidate.id, notes);
    };

    const handleToggleTag = async (tag: string) => {
        const newTags = tags.includes(tag)
            ? tags.filter(t => t !== tag)
            : [...tags, tag];
        setTags(newTags);
        await updateCandidateTags(candidate.id, newTags);
    };

    const myScore = candidate.scores?.[role];
    const partnerRole = role === 'interviewer1' ? 'interviewer2' : 'interviewer1';
    const partnerScore = candidate.scores?.[partnerRole];

    const isFinished = candidate.status === 'Interviewed' || candidate.status === 'Selected' || candidate.status === 'Rejected';

    const [leftTab, setLeftTab] = useState<'interview' | 'rubric' | 'all-questions'>('interview');
    const [isTrackConfirmed, setIsTrackConfirmed] = useState(false);
    const [confirmedTrack, setConfirmedTrack] = useState(candidate.track || 'General');

    // On mount, if track is generic or empty, prompt.
    // Actually, prompt always to be safe? The user requested "confirmed again".
    // Let's simpler: on Mount, show modal until confirmed.
    useEffect(() => {
        // Maybe check if already fully scored? But user wants to confirm track for *this* session?
        // Let's just force confirm once per session (page load).
        setIsTrackConfirmed(false);
    }, []);

    const handleTrackConfirm = (track: string) => {
        setConfirmedTrack(track);
        setIsTrackConfirmed(true);
    };

    return (
        <div className="h-full flex flex-col gap-6 p-1 relative">
            {/* Track Confirmation Overlay */}
            <TrackConfirmationModal
                candidateId={candidate.id}
                currentTrack={candidate.track || 'General'}
                isOpen={!isTrackConfirmed}
                onConfirm={handleTrackConfirm}
            />

            {/* Header */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col lg:flex-row items-start lg:items-center justify-between sticky top-0 z-50 gap-4">
                <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-start">
                    <div className="flex items-center gap-4">
                        <Link href="/candidates" className="p-2 hover:bg-slate-100 rounded-full transition-colors"><ArrowLeft size={20} /></Link>
                        <div>
                            <h1 className="text-xl font-bold text-slate-900">{candidate.name}</h1>
                            <div className="flex text-sm text-slate-500 gap-2 items-center">
                                <span>{candidate.branch} ({candidate.year})</span>
                                <span>•</span>
                                <span className="font-semibold text-blue-600">{confirmedTrack} Panel</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <StatusBadge status={candidate.status} />
                    </div>
                </div>
                <div className="hidden lg:block">
                    <StatusBadge status={candidate.status} />
                </div>

                {/* Center Tabs - Scrollable on mobile */}
                <div className="w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
                    <div className="flex bg-slate-100 p-1 rounded-lg w-max mx-auto lg:mx-0">
                        <button onClick={() => setLeftTab('interview')} className={cn("px-4 py-1.5 rounded-md text-sm font-bold transition-all whitespace-nowrap", leftTab === 'interview' ? "bg-white shadow text-slate-900" : "text-slate-500 hover:text-slate-700")}>Live Panel</button>
                        <button onClick={() => setLeftTab('rubric')} className={cn("px-4 py-1.5 rounded-md text-sm font-bold transition-all whitespace-nowrap", leftTab === 'rubric' ? "bg-white shadow text-slate-900" : "text-slate-500 hover:text-slate-700")}>Scoring Guide</button>
                        <button onClick={() => setLeftTab('all-questions')} className={cn("px-4 py-1.5 rounded-md text-sm font-bold transition-all whitespace-nowrap", leftTab === 'all-questions' ? "bg-white shadow text-slate-900" : "text-slate-500 hover:text-slate-700")}>Question Bank</button>
                    </div>
                </div>

                {/* Identity & Score */}
                <div className="flex items-center justify-between w-full lg:w-auto gap-4">
                    <div className="bg-slate-50 px-3 py-2 rounded-lg border border-slate-200 flex flex-col gap-2 flex-1 lg:flex-none min-w-[200px]">

                        {/* Role Selection - Big Buttons */}
                        <div className="flex bg-white rounded border border-slate-200 p-1">
                            <button
                                onClick={() => { setRole('interviewer1'); localStorage.setItem('interviewerRole', 'interviewer1'); }}
                                className={cn("flex-1 py-1 px-2 text-xs font-bold rounded transition-colors uppercase", role === 'interviewer1' ? "bg-slate-900 text-white shadow-sm" : "hover:bg-slate-50 text-slate-500")}
                            >
                                Interviewer 1
                            </button>
                            <button
                                onClick={() => { setRole('interviewer2'); localStorage.setItem('interviewerRole', 'interviewer2'); }}
                                className={cn("flex-1 py-1 px-2 text-xs font-bold rounded transition-colors uppercase", role === 'interviewer2' ? "bg-slate-900 text-white shadow-sm" : "hover:bg-slate-50 text-slate-500")}
                            >
                                Interviewer 2
                            </button>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="bg-white p-1 rounded-full shadow-sm border border-slate-100"><UserCircle size={16} className="text-slate-600" /></div>

                            {/* ... Name Input ... */}
                            {isEditingName ? (
                                <div className="flex gap-2 flex-1">
                                    <input
                                        autoFocus
                                        className="text-sm font-bold text-slate-900 bg-white border border-slate-300 rounded px-1 w-full focus:outline-blue-500"
                                        placeholder="Enter Your Name"
                                        value={interviewerName}
                                        onChange={e => setInterviewerName(e.target.value)}
                                        onBlur={handleNameSave}
                                        onKeyDown={e => e.key === 'Enter' && handleNameSave()}
                                    />
                                    <button onClick={handleNameSave} className="text-xs text-blue-600 font-bold hover:underline">Save</button>
                                </div>
                            ) : (
                                <div className="flex items-center gap-2 group cursor-pointer flex-1" onClick={() => setIsEditingName(true)}>
                                    <p className="text-sm font-bold text-slate-900 truncate">{interviewerName || 'Set Name'}</p>
                                    <Edit3 size={12} className="text-slate-400 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-4 pl-0 lg:pl-4 lg:border-l border-slate-200">
                        <button
                            onClick={() => setShowScorePanel(!showScorePanel)}
                            className="hidden lg:flex items-center gap-2 text-xs font-bold uppercase text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded transition-colors"
                        >
                            {showScorePanel ? 'Hide Panel' : 'Show Panel'}
                        </button>

                        {isFinished ? (
                            <div className="text-right px-2 lg:px-4 py-1.5 bg-green-50 border border-green-100 rounded-lg">
                                <p className="text-[10px] text-green-600 uppercase font-bold">Score</p>
                                <p className="text-xl lg:text-2xl font-bold text-green-700 leading-none">{candidate.averageScore}</p>
                            </div>
                        ) : (
                            <div className="text-right px-2 opacity-50 hidden sm:block">
                                <p className="text-[10px] text-slate-500 uppercase font-bold">Total</p>
                                <p className="text-lg font-bold text-slate-400 leading-none">HIDDEN</p>
                            </div>
                        )}
                        <Timer />
                    </div>
                </div>
            </div>

            {/* Main Grid - Responsive Stacking */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pb-8">

                {/* Left Column: Question & Notes */}
                <div className={`col-span-1 flex flex-col gap-6 order-2 lg:order-1 transition-all ${showScorePanel ? 'lg:col-span-8' : 'lg:col-span-12'}`}>
                    {leftTab === 'interview' && (
                        <>
                            {/* Question Panel */}
                            <div className="min-h-[300px]">
                                <QuestionPanel candidateTrack={confirmedTrack} />
                            </div>

                            {/* Notes & Tags */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col h-[300px]">
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-sm font-bold text-slate-700">Interview Notes</label>
                                        <button onClick={handleSaveNotes} className="p-1 hover:bg-slate-100 rounded text-blue-600"><Save size={16} /></button>
                                    </div>
                                    <textarea
                                        className="flex-1 w-full bg-slate-50 p-3 rounded-lg text-sm focus:outline-blue-500 resize-none font-medium text-slate-700"
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                        placeholder="Type remarks here..."
                                        onBlur={handleSaveNotes}
                                    />
                                </div>

                                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 h-[300px] overflow-y-auto">
                                    <label className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2"><TagIcon size={16} /> Quick Tags</label>
                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-xs uppercase text-green-600 font-extrabold mb-2 tracking-wider flex items-center gap-1">
                                                <CheckCircle2 size={12} /> Strengths
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {TAG_OPTIONS.positive.map(tag => (
                                                    <button
                                                        key={tag}
                                                        onClick={() => handleToggleTag(tag)}
                                                        className={`text-xs px-3 py-1.5 rounded-full border-2 transition-all font-bold ${tags.includes(tag)
                                                            ? 'bg-green-500 border-green-500 text-white shadow-md transform scale-105'
                                                            : 'bg-white border-slate-200 text-slate-500 hover:border-green-300 hover:text-green-600'
                                                            }`}
                                                    >
                                                        {tag}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="border-t pt-4">
                                            <p className="text-xs uppercase text-red-600 font-extrabold mb-2 tracking-wider flex items-center gap-1">
                                                <X size={12} /> Red Flags
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {TAG_OPTIONS.negative.map(tag => (
                                                    <button
                                                        key={tag}
                                                        onClick={() => handleToggleTag(tag)}
                                                        className={`text-xs px-3 py-1.5 rounded-full border-2 transition-all font-bold ${tags.includes(tag)
                                                            ? 'bg-red-500 border-red-500 text-white shadow-md transform scale-105'
                                                            : 'bg-white border-slate-200 text-slate-500 hover:border-red-300 hover:text-red-600'
                                                            }`}
                                                    >
                                                        {tag}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {leftTab === 'rubric' && (
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-[600px] overflow-y-auto">
                            <h2 className="text-xl font-bold mb-4">Scoring Guide (Rubric)</h2>
                            <div className="space-y-6">
                                {require('../lib/data').SCORING_RUBRIC.map((section: any) => (
                                    <div key={section.category} className="border-b pb-4">
                                        <h3 className="font-bold text-blue-800 mb-2">{section.category} (Max {section.max})</h3>
                                        <div className="space-y-1">
                                            {section.guide.map((g: any) => (
                                                <div key={g.range} className="grid grid-cols-4 text-sm">
                                                    <span className="font-bold text-slate-500">{g.range}</span>
                                                    <span className="col-span-3 text-slate-800">{g.desc}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {leftTab === 'all-questions' && (
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-[600px] overflow-y-auto">
                            <h2 className="text-xl font-bold mb-4">Complete Question Bank</h2>
                            <div className="space-y-6">
                                {Object.entries(questionBank)
                                    .sort(([a], [b]) => {
                                        const track = confirmedTrack || '';
                                        // Simple heuristic to prioritize match
                                        const isMatchA = a.toLowerCase().includes(track.toLowerCase()) || (track === 'General' && a.includes('General'));
                                        const isMatchB = b.toLowerCase().includes(track.toLowerCase()) || (track === 'General' && b.includes('General'));
                                        if (isMatchA && !isMatchB) return -1;
                                        if (!isMatchA && isMatchB) return 1;
                                        return 0;
                                    })
                                    .map(([category, questions]: [string, any]) => (
                                        <div key={category}>
                                            <h3 className={`font-bold p-2 rounded mb-2 ${category.toLowerCase().includes((confirmedTrack || '').toLowerCase()) ? 'bg-blue-100 text-blue-900 border border-blue-200' : 'bg-slate-50 text-slate-800'}`}>
                                                {category} {category.toLowerCase().includes((confirmedTrack || '').toLowerCase()) && '(Recommended)'}
                                            </h3>
                                            <ul className="list-disc pl-5 text-sm space-y-1 text-slate-700">
                                                {questions.map((q: string) => <li key={q}>{q}</li>)}
                                            </ul>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Column: Scoring */}
                <div className={`col-span-1 lg:col-span-4 flex flex-col gap-4 lg:sticky lg:top-24 order-1 lg:order-2 transition-all ${showScorePanel ? 'block' : 'hidden'}`}>
                    <ScoringPanel
                        key={role}
                        candidateId={candidate.id}
                        role={role}
                        existingScore={myScore || null}
                        isLocked={!!myScore}
                        interviewerName={interviewerName}
                        confirmedTrack={confirmedTrack}
                    />
                </div>

                {/* Mobile Floating Toggle (and Desktop Re-open trigger) */}
                <div className="fixed bottom-6 right-6 z-50">
                    <button
                        onClick={() => setShowScorePanel(!showScorePanel)}
                        className={`bg-blue-600 text-white p-3 rounded-full shadow-lg font-bold flex items-center gap-2 hover:bg-blue-700 transition-all ${showScorePanel ? 'lg:hidden' : 'block'}`}
                        title="Toggle Scoring Panel"
                    >
                        {showScorePanel ? <CheckCircle2 /> : <Edit3 />}
                        <span className="lg:hidden">{showScorePanel ? 'Close Scoring' : 'Score Candidate'}</span>
                        <span className="hidden lg:inline">Open Scoring</span>
                    </button>
                </div>

                {/* Desktop Toggle Button (Close) - Only visible when panel is open on desktop */}
                {showScorePanel && (
                    <div className="hidden lg:block fixed bottom-6 right-[340px] z-50">
                        {/* Positioned to the left of the panel? Or just put a close button inside the panel header? 
                             Actually, let's put a simple toggle in the Header or use the floating button logic above. 
                             The logic above hides the button on desktop if panel is open. 
                             Let's add a "Collapse" button in the header instead for cleaner UI. 
                         */}
                    </div>
                )}

            </div>
        </div>
    );
}
