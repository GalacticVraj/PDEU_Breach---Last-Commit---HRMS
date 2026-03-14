'use client';

import { getQuestions, updateQuestions } from '@/lib/actions';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EditQBankPage() {
    const [qbank, setQBank] = useState<Record<string, string[]>>({});
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [questions, setQuestions] = useState<string[]>([]);
    const [newQ, setNewQ] = useState('');
    const router = useRouter();

    useEffect(() => {
        getQuestions().then(data => {
            setQBank(data);
            const firstCat = Object.keys(data)[0];
            if (firstCat) {
                setSelectedCategory(firstCat);
                setQuestions(data[firstCat]);
            }
        });
    }, []);

    const handleCategoryChange = (cat: string) => {
        setSelectedCategory(cat);
        setQuestions(qbank[cat] || []);
    };

    const addQuestion = () => {
        if (!newQ.trim()) return;
        const updated = [...questions, newQ];
        setQuestions(updated);
        setNewQ('');
    };

    const removeQuestion = (index: number) => {
        const updated = questions.filter((_, i) => i !== index);
        setQuestions(updated);
    };

    const saveChanges = async () => {
        await updateQuestions(selectedCategory, questions);
        // Update local state to reflect persistence
        setQBank({ ...qbank, [selectedCategory]: questions });
        alert('Saved!');
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Edit Question Bank</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-4 rounded shadow md:col-span-1">
                    <h3 className="font-bold mb-3 text-slate-700">Categories</h3>
                    <ul className="space-y-2">
                        {Object.keys(qbank).map(cat => (
                            <li
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                className={`cursor-pointer p-2 rounded text-sm ${selectedCategory === cat ? 'bg-blue-100 text-blue-700 font-bold' : 'hover:bg-slate-50'}`}
                            >
                                {cat}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-6 rounded shadow md:col-span-3">
                    <h3 className="font-bold mb-4 text-xl border-b pb-2">{selectedCategory}</h3>

                    <ul className="space-y-3 mb-6">
                        {questions.map((q, idx) => (
                            <li key={idx} className="flex justify-between items-start group p-2 hover:bg-slate-50 rounded">
                                <span>{q}</span>
                                <button
                                    onClick={() => removeQuestion(idx)}
                                    className="text-red-500 opacity-0 group-hover:opacity-100 font-bold ml-2"
                                >
                                    ×
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="flex gap-2 mb-4">
                        <input
                            value={newQ}
                            onChange={(e) => setNewQ(e.target.value)}
                            placeholder="Type new question here..."
                            className="flex-1 p-2 border border-slate-300 rounded"
                            onKeyDown={e => e.key === 'Enter' && addQuestion()}
                        />
                        <button
                            onClick={addQuestion}
                            className="bg-slate-200 text-slate-800 px-4 py-2 rounded font-bold"
                        >
                            Add
                        </button>
                    </div>

                    <div className="flex justify-end pt-4 border-t">
                        <button
                            onClick={saveChanges}
                            className="bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
