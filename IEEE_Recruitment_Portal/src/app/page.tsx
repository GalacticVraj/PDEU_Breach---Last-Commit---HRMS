import { getCandidates } from '@/lib/actions';
import { getSession } from '@/lib/auth';
import Link from 'next/link';
import { Users, Clock, CheckCircle, AlertCircle, Shield, Briefcase } from 'lucide-react';
import { Candidate } from '@/lib/types';

export const dynamic = 'force-dynamic';

export default async function Dashboard() {
  const session = await getSession();
  const allCandidates = await getCandidates();

  // Filter based on role
  let candidates = allCandidates;
  if (session?.role === 'DeptHead' && session.departmentId) {
    // Assuming candidates will have departmentId later, for now checking track/role mapping or just all for prototype
    // To simulate, let's filter by track if matched, or just show all for now but marked as "My Dept"
    // TODO: Add departmentId to candidates
  }

  const total = candidates.length;
  const interviewing = candidates.filter(c => c.status === 'In-Progress').length;
  const completed = candidates.filter(c => c.status === 'Interviewed' || c.status === 'Selected' || c.status === 'Rejected').length;
  const pending = candidates.filter(c => c.status === 'Pending').length;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            {session?.role === 'SuperAdmin' ? 'Admin Dashboard' :
              session?.role === 'DeptHead' ? 'Department Overview' : 'Interviewer Space'}
          </h1>
          <p className="text-slate-500 mt-2">
            {session?.role === 'SuperAdmin' ? 'Overview of all recruitment activities.' :
              session?.role === 'DeptHead' ? `Managing ${session.departmentId || 'Department'} recruitment.` : 'Your assigned interviews and tasks.'}
          </p>
        </div>
        <div className="text-right">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase">
            <Shield size={12} /> {session?.role}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Candidates" value={total} icon={Users} color="bg-[#FF6B00]" />
        <StatCard title="Interviewing Now" value={interviewing} icon={Clock} color="bg-[#E55A00]" />
        <StatCard title="Completed" value={completed} icon={CheckCircle} color="bg-green-500" />
        <StatCard title="Pending" value={pending} icon={AlertCircle} color="bg-[#3A3A3C]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/candidates" className="p-4 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 text-center transition-colors">
              <span className="block font-semibold text-slate-800">Manage Candidates</span>
              <span className="text-sm text-slate-500">Import / Add / Assign</span>
            </Link>
            {session?.role !== 'Interviewer' && (
              <Link href="/scoreboard" className="p-4 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 text-center transition-colors">
                <span className="block font-semibold text-slate-800">Scoreboard</span>
                <span className="text-sm text-slate-500">Final Selections</span>
              </Link>
            )}
            <Link href="/guide" className="p-4 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 text-center transition-colors">
              <span className="block font-semibold text-slate-800">Scoring Guide</span>
              <span className="text-sm text-slate-500">View Rubrics</span>
            </Link>
            <Link href="/qbank" className="p-4 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 text-center transition-colors">
              <span className="block font-semibold text-slate-800">Question Bank</span>
              <span className="text-sm text-slate-500">Review Questions</span>
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-lg font-bold mb-4">Recruitment Progress</h2>
          {total > 0 ? (
            <div>
              <div className="flex justify-between text-sm text-slate-500 mb-2">
                <span>completion rate</span>
                <span>{Math.round((completed / total) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-[#FF6B00] h-4 rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(255,107,0,0.4)]"
                  style={{ width: `${(completed / total) * 100}%` }}
                />
              </div>
            </div>
          ) : (
            <p className="text-slate-500">No candidates yet.</p>
          )}

          <div className="mt-6 space-y-3">
            <h3 className="text-sm font-bold uppercase text-slate-400">Department Status</h3>
            {['Technical', 'Creative', 'Editorial'].map(dept => (
              <div key={dept} className="flex justify-between items-center text-sm">
                <span>{dept}</span>
                <span className="font-mono text-slate-500">
                  {candidates.filter(c => c.track === dept || (dept === 'Technical' && c.track === 'Web')).length} candidates
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, color }: { title: string, value: number, icon: any, color: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
      </div>
      <div className={`p-3 rounded-xl ${color} shadow-lg`}>
        <Icon className="text-white" size={24} />
      </div>
    </div>
  );
}
