import { getCandidates } from '@/lib/actions';
import { FeedbackReport } from '@/components/FeedbackReport';
import { PrintButton } from '@/components/PrintButton';

export const dynamic = 'force-dynamic';

export default async function BulkReportsPage({ searchParams }: { searchParams: Promise<{ ids?: string }> }) {
    const { ids } = await searchParams;
    const allCandidates = await getCandidates();

    // Filter selected
    const selectedIds = ids?.split(',') || [];
    const selectedCandidates = allCandidates.filter(c => selectedIds.includes(c.id));

    if (selectedCandidates.length === 0) {
        return <div className="p-8">No candidates selected.</div>;
    }

    return (
        <div>
            <div className="print:hidden p-4 bg-slate-900 text-white flex justify-between items-center sticky top-0 z-10 shadow-md">
                <h1 className="font-bold">Bulk Report View ({selectedCandidates.length})</h1>
                <PrintButton />
            </div>

            <div className="print:p-0">
                {selectedCandidates.map((candidate, index) => (
                    <div key={candidate.id} className="page-break-after-always">
                        <FeedbackReport candidate={candidate} showPrintButton={false} />
                    </div>
                ))}
            </div>

            <style>{`
                @media print {
                    .page-break-after-always {
                        page-break-after: always;
                    }
                    /* Ensure headers/footers of browser don't clutter */
                    body {
                        margin: 0;
                        padding: 0;
                    }
                }
            `}</style>
        </div>
    );
}
