import Link from 'next/link';
import { Users, ArrowRight } from 'lucide-react';

export default function InterviewLandingPage() {
    return (
        <div className="flex flex-col items-center justify-center h-[80vh] text-center space-y-6">
            <div className="bg-blue-50 p-6 rounded-full">
                <Users size={64} className="text-blue-600" />
            </div>

            <div>
                <h1 className="text-2xl font-bold text-slate-900">Live Interview Panel</h1>
                <p className="text-slate-500 mt-2 max-w-md mx-auto">
                    To start a live interview, please select a candidate from the list.
                    The interview panel is specific to each candidate.
                </p>
            </div>

            <Link
                href="/candidates"
                className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
                Select Candidate to Start <ArrowRight size={20} />
            </Link>
        </div>
    );
}
