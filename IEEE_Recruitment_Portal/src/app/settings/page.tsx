import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { ResetDatabaseButton } from '@/components/ResetDatabaseButton';

export default async function SettingsPage() {
    const session = await getSession();
    if (session?.role !== 'SuperAdmin') {
        redirect('/');
    }

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-900">System Settings</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="/settings/departments" className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-blue-500 transition-all group">
                    <h3 className="font-bold text-lg text-slate-800 group-hover:text-blue-600 mb-2">Manage Departments</h3>
                    <p className="text-sm text-slate-500">Create or remove departments (e.g. HR, Logistics).</p>
                </a>

                <div className="bg-white p-6 rounded-xl shadow border border-red-100">
                    <h2 className="text-lg font-bold text-red-700 mb-2">Danger Zone</h2>
                    <p className="text-slate-600 mb-4">
                        Resetting the system will delete ALL candidates and members. This action cannot be undone.
                        Default users and departments will be preserved.
                    </p>
                    <ResetDatabaseButton />
                </div>
            </div>
        </div>
    );
}
