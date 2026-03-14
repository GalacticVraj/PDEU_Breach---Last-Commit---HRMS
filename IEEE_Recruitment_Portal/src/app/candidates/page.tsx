import { getCandidates } from '@/lib/actions';
import { CandidateList } from '@/components/CandidateList';
import { CsvUploader } from '@/components/CsvUploader';
import { ExportButton } from '@/components/ExportButton';
import { getSession } from '@/lib/auth';
import Link from 'next/link';
import { UserPlus } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function CandidatesPage() {
    const session = await getSession();
    const allCandidates = await getCandidates();

    let relatedTrack: string | undefined;

    // Context-aware filtering
    let candidates = allCandidates;
    if (session?.role === 'DeptHead' && session.departmentId) {
        // Simple mapping for prototype: Technical -> 'Web', 'AI-ML', 'General' (if strict mapping needed, need Dept field on Candidate)
        // For now, filter by "positionApplied" or "track" if it matches dept name
        // Or if we assume candidates will get a "departmentId" field soon.
        // Let's filter by track partial match or exact match to department name for now.
        const deptName = session.departmentId.replace('dept_', ''); // e.g. 'tech'

        // Map dept to scoring track
        if (deptName === 'tech') relatedTrack = 'Technical';
        else if (deptName === 'crat') relatedTrack = 'Creative'; // Typo protection if any
        else if (deptName === 'creative') relatedTrack = 'Creative';
        else if (deptName === 'edit') relatedTrack = 'Editorial';
        else if (deptName === 'social') relatedTrack = 'Social Media';
        else if (deptName === 'mgmt') relatedTrack = 'Management';
        else relatedTrack = deptName.charAt(0).toUpperCase() + deptName.slice(1);

        // Filtering Removed as per user request (Open Filter)
        // candidates = allCandidates; // Implicitly true since we don't reassign
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Candidates</h1>
                    <p className="text-slate-500">
                        {session?.role === 'DeptHead' ? `Managing ${session.departmentId} Candidates` : 'Manage list, import from CSV, or start interviews.'}
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Link href="/candidates/add" className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-800">
                        <UserPlus size={16} /> Add
                    </Link>
                    {session?.role === 'SuperAdmin' && <ExportButton candidates={candidates} />}
                    <CsvUploader />
                </div>
            </div>

            <CandidateList initialCandidates={candidates} userRole={session?.role} relatedTrack={relatedTrack} />
        </div>
    );
}
