import { getQuestions } from '@/lib/actions';

export default async function QuestionBankPage() {
    const questions = await getQuestions();

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-slate-900">Question Bank</h1>
                <a href="/qbank/edit" className="px-4 py-2 bg-slate-800 text-white text-sm font-bold rounded hover:bg-slate-900">
                    Edit Questions (Admin)
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(questions).map(([category, qs]: [string, any]) => (
                    <div key={category} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="px-6 py-4 bg-slate-50 border-b border-slate-100">
                            <h2 className="font-bold text-slate-700">{category}</h2>
                        </div>
                        <ul className="divide-y divide-slate-100">
                            {qs.map((q: string, i: number) => (
                                <li key={i} className="px-6 py-3 text-sm text-slate-600 hover:bg-slate-50">
                                    {q}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
