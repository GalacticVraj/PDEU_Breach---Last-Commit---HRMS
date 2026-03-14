import { SCORING_RUBRIC } from '@/lib/data';

export default function ScoringGuidePage() {
    return (
        <div className="max-w-4xl space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Scoring Guide</h1>
                <p className="text-slate-500">Refrence for consistent evaluation.</p>
            </div>

            <div className="space-y-8">
                {SCORING_RUBRIC.map((rubric) => (
                    <div key={rubric.category} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="px-6 py-4 bg-slate-900 text-white">
                            <div className="flex justify-between items-center">
                                <h2 className="font-bold text-lg">{rubric.category}</h2>
                                <span className="text-xs bg-white/20 px-2 py-1 rounded">Max Score: {rubric.max}</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {rubric.guide.map((g) => (
                                    <div key={g.range} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                        <span className="block text-xl font-bold text-blue-600 mb-1">{g.range}</span>
                                        <span className="text-sm font-medium text-slate-700">{g.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <h3 className="font-bold text-blue-900 mb-4">Total Score Meaning</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                    <div className="p-2"><div className="font-bold text-lg text-slate-900">70–80</div><div className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Exceptional</div></div>
                    <div className="p-2"><div className="font-bold text-lg text-slate-900">60–69</div><div className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Strong</div></div>
                    <div className="p-2"><div className="font-bold text-lg text-slate-900">50–59</div><div className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Good</div></div>
                    <div className="p-2"><div className="font-bold text-lg text-slate-900">40–49</div><div className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Average</div></div>
                    <div className="p-2"><div className="font-bold text-lg text-slate-900">&lt;40</div><div className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Weak Fit</div></div>
                </div>
            </div>
        </div>
    );
}
