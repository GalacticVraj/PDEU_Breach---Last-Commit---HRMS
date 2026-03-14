import { getUsers, getDepartments } from '@/lib/actions';
import { CandidateForm } from '@/components/CandidateForm';

export const dynamic = 'force-dynamic';

export default async function AddCandidatePage() {
    const users = await getUsers();
    const departments = await getDepartments();

    const interviewers = users.filter(u => u.role === 'Interviewer' || u.role === 'DeptHead');

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Add Candidate</h1>
                <p className="text-slate-500">Manually add a new candidate.</p>
            </div>

            <CandidateForm
                interviewers={interviewers}
                departments={departments}
                mode="add"
            />
        </div>
    );
}
