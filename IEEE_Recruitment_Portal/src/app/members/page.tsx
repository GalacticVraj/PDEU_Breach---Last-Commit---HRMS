import { getMembers, getDepartments, deleteMember } from '@/lib/actions';
import { getSession } from '@/lib/auth';
import Link from 'next/link';
import { UserPlus, Trash2, Edit2 } from 'lucide-react';
import { Member } from '@/lib/types';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function MembersPage() {
    const session = await getSession();
    if (!session || session.role === 'Interviewer') {
        redirect('/');
    }

    const members = await getMembers();
    const departments = await getDepartments();

    const getDeptName = (id: string) => departments.find(d => d.id === id)?.name || id;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Team Members <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded ml-2">v2.0 Beta</span></h1>
                    <p className="text-slate-500">Manage existing committee members and onboard new ones.</p>
                </div>
                <Link href="/members/add" className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-800">
                    <UserPlus size={16} /> Onboard Member
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow border border-slate-200 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase text-slate-500 font-semibold">
                        <tr>
                            <th className="p-4">Name</th>
                            <th className="p-4">Department</th>
                            <th className="p-4">Role</th>
                            <th className="p-4">Status</th>
                            <th className="p-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {members.map((member: Member) => (
                            <tr key={member.id} className="hover:bg-slate-50">
                                <td className="p-4">
                                    <div className="font-bold text-slate-900">{member.name}</div>
                                    <div className="text-xs text-slate-500">{member.email}</div>
                                </td>
                                <td className="p-4 text-sm text-slate-600">{getDeptName(member.departmentId)}</td>
                                <td className="p-4 text-sm font-medium text-slate-700">{member.role}</td>
                                <td className="p-4">
                                    <span className={`text-xs px-2 py-1 rounded font-bold ${member.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                                        {member.status}
                                    </span>
                                </td>
                                <td className="p-4 text-right">
                                    <div className="flex justify-end gap-2 items-center">
                                        <Link href={`/members/${member.id}/edit`} className="text-slate-400 hover:text-blue-600 transition-colors">
                                            <Edit2 size={16} />
                                        </Link>
                                        <form action={async () => {
                                            'use server';
                                            await deleteMember(member.id);
                                        }}>
                                            <button className="text-slate-400 hover:text-red-600 transition-colors pt-1">
                                                <Trash2 size={16} />
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {members.length === 0 && (
                            <tr>
                                <td colSpan={5} className="p-8 text-center text-slate-500">No members found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
