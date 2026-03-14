import { getCandidate, getUsers, getDepartments } from '@/lib/actions';
import { CandidateForm } from '@/components/CandidateForm';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function EditCandidatePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const candidate = await getCandidate(id);
    const users = await getUsers();
    const departments = await getDepartments();

    if (!candidate) {
        redirect('/candidates');
    }

    // Filter potential interviewers
    const interviewers = users.filter(u => u.role === 'Interviewer' || u.role === 'DeptHead');

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Edit Candidate</h1>
                <p className="text-slate-500">Update details and assign interviewers.</p>
            </div>

            <CandidateForm
                initialData={candidate}
                interviewers={interviewers}
                departments={departments}
                mode="edit"
            />
        </div>
    );
}
