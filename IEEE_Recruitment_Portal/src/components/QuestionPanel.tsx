'use client';

import { useState } from 'react';
import { QUESTION_BANK } from '@/lib/data';
import { RefreshCw, ArrowRight, BookOpen, Layers } from 'lucide-react';

export function QuestionPanel({ candidateTrack }: { candidateTrack: string }) {
    // Default to candidate's track or 'Motivation'
    const initialCat = QUESTION_BANK[`Technical — ${candidateTrack}` as keyof typeof QUESTION_BANK]
        ? `Technical — ${candidateTrack}`
        : 'Motivation & Fit';

    const [category, setCategory] = useState<string>(initialCat);
    const [qIndex, setQIndex] = useState(0);

    const questions = QUESTION_BANK[category as keyof typeof QUESTION_BANK] || [];
    const currentQ = questions[qIndex] || "No questions available in this category.";

    const nextQuestion = () => {
        setQIndex((prev) => (prev + 1) % questions.length);
    };

    const categories = Object.keys(QUESTION_BANK);

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
                <BookOpen size={120} />
            </div>

            <div className="relative z-10 flex-1 flex flex-col justify-center">
                <div className="mb-4">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">Current Category</label>
                    <select
                        value={category}
                        onChange={(e) => { setCategory(e.target.value); setQIndex(0); }}
                        className="bg-slate-100 border-none rounded-lg px-3 py-1 text-sm font-semibold text-slate-700 cursor-pointer hover:bg-slate-200 transition-colors"
                    >
                        {categories.map((c) => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                </div>

                <h3 className="text-3xl font-bold text-slate-900 leading-tight min-h-[120px]">
                    {currentQ}
                </h3>
            </div>

            <div className="relative z-10 pt-6 border-t border-slate-100 flex gap-3">
                <button
                    onClick={nextQuestion}
                    className="flex-1 py-3 px-6 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                >
                    <RefreshCw size={18} /> Next Question
                </button>
                <button
                    onClick={() => {
                        // Cycle category
                        const currIdx = categories.indexOf(category);
                        const nextCat = categories[(currIdx + 1) % categories.length];
                        setCategory(nextCat);
                        setQIndex(0);
                    }}
                    className="px-6 py-3 bg-slate-100 text-slate-600 rounded-lg font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2"
                >
                    <Layers size={18} /> Change Topic
                </button>
            </div>
        </div>
    );
}
