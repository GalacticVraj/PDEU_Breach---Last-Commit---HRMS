import { getUsers, getDepartments } from '@/lib/actions';
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { Shield, UserPlus } from 'lucide-react';
import Link from 'next/link';
import { User } from '@/lib/types';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
    const session = await getSession();

    if (session?.role !== 'SuperAdmin') {
        redirect('/');
    }

    const users = await getUsers();
    const departments = await getDepartments();

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">System Administration</h1>
                    <p className="text-slate-500">Manage Users & Departments</p>
                </div>
                {/* <Link href="/admin/users/new" className="px-4 py-2 bg-blue-600 text-white rounded-lg font-bold flex items-center gap-2">
                    <UserPlus size={18} /> Add User
                </Link> */}
            </div>

            <div className="bg-white rounded-xl shadow border border-slate-200 overflow-hidden">
                <div className="p-4 border-b border-slate-200 bg-slate-50 font-bold text-slate-700 flex justify-between">
                    <span>System Users ({users.length})</span>
                    <span className="text-xs font-normal text-slate-500 uppercase tracking-wider">Access Control</span>
                </div>
                <table className="w-full text-left">
                    <thead className="bg-white border-b border-slate-100 text-xs uppercase text-slate-500">
                        <tr>
                            <th className="p-4">Name / ID</th>
                            <th className="p-4">Role</th>
                            <th className="p-4">Department</th>
                            <th className="p-4">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {users.map((user: User) => (
                            <tr key={user.id} className="hover:bg-slate-50">
                                <td className="p-4">
                                    <div className="font-bold text-slate-900">{user.name}</div>
                                    <div className="text-xs text-slate-500">{user.email}</div>
                                </td>
                                <td className="p-4">
                                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-bold border ${user.role === 'SuperAdmin' ? 'bg-purple-50 text-purple-700 border-purple-100' :
                                            user.role === 'DeptHead' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                                                'bg-slate-50 text-slate-600 border-slate-200'
                                        }`}>
                                        <Shield size={10} /> {user.role}
                                    </span>
                                </td>
                                <td className="p-4 text-sm text-slate-600">
                                    {user.departmentId ?
                                        departments.find(d => d.id === user.departmentId)?.name || user.departmentId
                                        : '-'}
                                </td>
                                <td className="p-4 text-sm text-green-600 font-bold">Active</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-2">Departments</h3>
                    <div className="space-y-2">
                        {departments.map((d: any) => (
                            <div key={d.id} className="flex justify-between text-sm py-1 border-b border-slate-50 last:border-0">
                                <span>{d.name}</span>
                                <span className="text-slate-400 text-xs">{d.id}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
