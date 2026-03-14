'use client';

import { useState } from 'react';
import { Target, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { updateCandidateDetails } from '@/lib/actions';

interface Props {
    candidateId: string;
    currentTrack: string;
    onConfirm: (track: string) => void;
    isOpen: boolean;
}

const TRACK_OPTIONS = [
    'Technical',
    'Creative',
    'Editorial',
    'Social Media',
    'Management',
    'General'
];

export function TrackConfirmationModal({ candidateId, currentTrack, onConfirm, isOpen }: Props) {
    const [selectedTrack, setSelectedTrack] = useState(currentTrack || 'Technical');
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleConfirm = async () => {
        setLoading(true);
        // Persist the confirmed track to the candidate (even if it's the same, explicit confirmation is key)
        await updateCandidateDetails(candidateId, { track: selectedTrack });
        onConfirm(selectedTrack);
        setLoading(false);
    };

    return (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-in zoom-in-95 duration-200">
                <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Confirm Panel Track</h2>
                    <p className="text-slate-500 mt-2">
                        Which department are you interviewing this candidate for?
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                    {TRACK_OPTIONS.map((track) => (
                        <button
                            key={track}
                            onClick={() => setSelectedTrack(track)}
                            className={cn(
                                "p-3 rounded-lg border-2 text-sm font-bold transition-all",
                                selectedTrack === track
                                    ? "border-blue-600 bg-blue-50 text-blue-700 shadow-sm"
                                    : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                            )}
                        >
                            {track}
                        </button>
                    ))}
                </div>

                <button
                    onClick={handleConfirm}
                    disabled={loading}
                    className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
                >
                    {loading ? 'Confirming...' : (
                        <>
                            Start Interview <CheckCircle2 size={20} />
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
