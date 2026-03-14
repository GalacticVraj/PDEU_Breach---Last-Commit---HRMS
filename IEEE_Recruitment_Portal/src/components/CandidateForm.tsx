'use client';

import { useState } from 'react';
import { Candidate, User, Department } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { updateCandidateDetails, addCandidates } from '@/lib/actions';

interface CandidateFormProps {
    initialData?: Candidate;
    interviewers: User[];
    departments: Department[];
    mode: 'add' | 'edit';
}

export function CandidateForm({ initialData, interviewers, departments, mode }: CandidateFormProps) {
    const router = useRouter();
    const [formData, setFormData] = useState<Partial<Candidate>>(initialData || {
        name: '',
        rollNo: '',
        email: '',
        phone: '',
        branch: '',
        year: '2nd Year',
        track: 'General',
        status: 'Pending',
        assignedInterviewerId: '',
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (mode === 'edit' && initialData?.id) {
                await updateCandidateDetails(initialData.id, formData);
            } else {
                // Mock ID generation
                const newCandidate = {
                    ...formData,
                    id: crypto.randomUUID(),
                    scores: { interviewer1: null, interviewer2: null }
                } as Candidate;
                await addCandidates([newCandidate]);
            }
            router.push('/candidates');
            router.refresh();
        } catch (error) {
            console.error(error);
            alert('Failed to save');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input
                        required
                        className="w-full p-2 border border-slate-300 rounded"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                    <input
                        type="email"
                        required
                        className="w-full p-2 border border-slate-300 rounded"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Roll No</label>
                    <input
                        required
                        className="w-full p-2 border border-slate-300 rounded"
                        value={formData.rollNo}
                        onChange={e => setFormData({ ...formData, rollNo: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
                    <input
                        required
                        className="w-full p-2 border border-slate-300 rounded"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Department / Track</label>
                    <select
                        className="w-full p-2 border border-slate-300 rounded"
                        value={formData.track}
                        onChange={e => setFormData({ ...formData, track: e.target.value })}
                    >
                        <option value="General">General</option>
                        {departments.map(d => (
                            <option key={d.id} value={d.name}>{d.name}</option>
                        ))}
                        {/* Legacy/Specific Tracks */}
                        <option value="Web">Web (Technical)</option>
                        <option value="AI-ML">AI-ML (Technical)</option>
                        <option value="App">App (Technical)</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Year</label>
                    <select
                        className="w-full p-2 border border-slate-300 rounded"
                        value={formData.year}
                        onChange={e => setFormData({ ...formData, year: e.target.value })}
                    >
                        <option>1st Year</option>
                        <option>2nd Year</option>
                        <option>3rd Year</option>
                        <option>4th Year</option>
                    </select>
                </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4">Interview Assignment</h3>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Assign Interviewer</label>
                    <select
                        className="w-full p-2 border border-slate-300 rounded"
                        value={formData.assignedInterviewerId || ''}
                        onChange={e => setFormData({ ...formData, assignedInterviewerId: e.target.value })}
                    >
                        <option value="">Unassigned</option>
                        {interviewers.map(u => (
                            <option key={u.id} value={u.id}>{u.name} ({u.role})</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => router.back()} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded">
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 disabled:opacity-50"
                >
                    {loading ? 'Saving...' : 'Save Candidate'}
                </button>
            </div>
        </form>
    );
}
