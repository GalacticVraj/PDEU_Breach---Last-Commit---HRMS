import { addMember, getDepartments } from '@/lib/actions';
import { redirect } from 'next/navigation';
import { Member } from '@/lib/types';

export default async function AddMemberPage() {
    const departments = await getDepartments();

    async function createMember(formData: FormData) {
        'use server';

        const member: Member = {
            id: Date.now().toString(),
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            departmentId: formData.get('departmentId') as string,
            role: formData.get('role') as string,

            status: 'Active',
            startDate: new Date().toISOString().split('T')[0]
        };

        await addMember(member);
        redirect('/members');
    }

    return (
        <div className="max-w-xl mx-auto space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Onboard Member</h1>
                <p className="text-slate-500">Add a new committee member.</p>
            </div>

            <form action={createMember} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-4">
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input name="name" required className="w-full p-2 border border-slate-300 rounded" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                    <input name="email" type="email" required className="w-full p-2 border border-slate-300 rounded" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Department</label>
                    <select name="departmentId" className="w-full p-2 border border-slate-300 rounded">
                        {departments.map(d => (
                            <option key={d.id} value={d.id}>{d.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">System Role</label>
                    <select name="role" required className="w-full p-2 border border-slate-300 rounded">
                        <option value="Interviewer">Interviewer</option>
                        <option value="DeptHead">Department Head</option>
                    </select>
                    <p className="text-xs text-slate-500 mt-1">Determines access permissions.</p>
                </div>


                <div className="pt-4 flex justify-end">
                    <button type="submit" className="px-6 py-2 bg-green-600 text-white font-bold rounded hover:bg-green-700">
                        Add Member
                    </button>
                </div>
            </form>
        </div>
    );
}
