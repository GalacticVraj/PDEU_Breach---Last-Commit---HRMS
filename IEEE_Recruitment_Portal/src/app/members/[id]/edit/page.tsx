'use client';

import { getMember, updateMember, getDepartments } from '@/lib/actions';
import { Member, Department } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function EditMemberPage({ params }: { params: Promise<{ id: string }> }) {
    const [member, setMember] = useState<Member | null>(null);
    const [departments, setDepartments] = useState<Department[]>([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        departmentId: '',
        password: '' // New password field
    });
    const router = useRouter();

    useEffect(() => {
        params.then(p => {
            getMember(p.id).then(m => {
                if (m) {
                    setMember(m);
                    setFormData({
                        name: m.name,
                        email: m.email,
                        role: m.role,
                        departmentId: m.departmentId,
                        password: '' // Don't show hash
                    });
                }
            });
        });
        getDepartments().then(setDepartments);
    }, [params]);

    const handleSave = async () => {
        if (!member) return;

        await updateMember(member.id, {
            name: formData.name,
            email: formData.email,
            role: formData.role as any,
            departmentId: formData.departmentId,
            ...(formData.password ? { passwordHash: formData.password } : {}) // Update password if set
        });

        router.push('/members');
    };

    if (!member) return <div className="p-8">Loading member...</div>;

    return (
        <div className="max-w-xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-slate-900">Edit Member Access</h1>

            <div className="bg-white p-6 rounded-xl shadow border border-slate-200 space-y-4">
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                    <input
                        className="w-full p-2 border border-slate-300 rounded"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Email (Username)</label>
                    <input
                        className="w-full p-2 border border-slate-300 rounded"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Role</label>
                        <select
                            className="w-full p-2 border border-slate-300 rounded"
                            value={formData.role}
                            onChange={e => setFormData({ ...formData, role: e.target.value })}
                        >
                            <option value="Interviewer">Interviewer</option>
                            <option value="DeptHead">Department Head</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Department</label>
                        <select
                            className="w-full p-2 border border-slate-300 rounded"
                            value={formData.departmentId}
                            onChange={e => setFormData({ ...formData, departmentId: e.target.value })}
                        >
                            {departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                        </select>
                    </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                    <label className="block text-sm font-bold text-blue-700 mb-1">Reset Password</label>
                    <p className="text-xs text-slate-500 mb-2">Leave blank to keep existing password. Set a new one to reset access.</p>
                    <input
                        type="text"
                        placeholder="Enter new password to reset..."
                        className="w-full p-2 border border-blue-200 bg-blue-50 rounded font-mono text-sm"
                        value={formData.password}
                        onChange={e => setFormData({ ...formData, password: e.target.value })}
                    />
                </div>

                <div className="pt-4 flex justify-end gap-3">
                    <button onClick={() => router.back()} className="px-4 py-2 text-slate-500 hover:bg-slate-100 rounded">Cancel</button>
                    <button onClick={handleSave} className="px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700">Save Changes</button>
                </div>
            </div>
        </div>
    );
}
