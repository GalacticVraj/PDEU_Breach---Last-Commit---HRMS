'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { updateCandidateDetails } from '@/lib/actions';
import { Candidate } from '@/lib/types';
import Link from 'next/link';
import { Save, X } from 'lucide-react';

export function EditCandidateForm({ candidate }: { candidate: Candidate }) {
    const [formData, setFormData] = useState({
        name: candidate.name,
        branch: candidate.branch,
        year: candidate.year,
        email: candidate.email,
        phone: candidate.phone,
        track: candidate.track,
        whyIeee: candidate.whyIeee,
    });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await updateCandidateDetails(candidate.id, formData);
        setLoading(false);
        router.push('/candidates');
        router.refresh(); // Refresh to show updated data in list
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                    <input name="name" required value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Branch</label>
                    <input name="branch" required value={formData.branch} onChange={handleChange} className="w-full p-2 border rounded" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Year</label>
                    <select name="year" required value={formData.year} onChange={handleChange} className="w-full p-2 border rounded">
                        <option value="FE">FE</option>
                        <option value="SE">SE</option>
                        <option value="TE">TE</option>
                        <option value="BE">BE</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Track</label>
                    <select name="track" required value={formData.track} onChange={handleChange} className="w-full p-2 border rounded">
                        <option value="Web Dev">Web Dev</option>
                        <option value="App Dev">App Dev</option>
                        <option value="Design">Design</option>
                        <option value="Management">Management</option>
                        <option value="AI/ML">AI/ML</option>
                        <option value="Cybersec">Cybersec</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                    <input name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Phone</label>
                    <input name="phone" required value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" />
                </div>
            </div>

            <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Why IEEE? / Motivation</label>
                <textarea name="whyIeee" rows={4} value={formData.whyIeee} onChange={handleChange} className="w-full p-2 border rounded" />
            </div>

            <div className="flex justify-end gap-4 pt-4 border-t">
                <Link href="/candidates" className="px-6 py-2 bg-slate-100 text-slate-600 rounded-lg font-bold hover:bg-slate-200">Cancel</Link>
                <button type="submit" disabled={loading} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 flex items-center gap-2">
                    {loading ? 'Saving...' : <><Save size={18} /> Save Changes</>}
                </button>
            </div>
        </form>
    );
}
