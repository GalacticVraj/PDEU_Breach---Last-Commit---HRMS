import { getCandidates } from '@/lib/actions';
import { ExportButton } from '@/components/ExportButton';
import { ReportList } from '@/components/ReportList';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function ReportsPage() {
    const candidates = await getCandidates();

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-slate-900">Reports Center</h1>
                <ExportButton candidates={candidates} />
            </div>

            <ReportList candidates={candidates} />
        </div>
    );
}
