import { getCandidate } from '@/lib/actions';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FeedbackReport } from '@/components/FeedbackReport';

export const dynamic = 'force-dynamic';

export default async function CandidateReportPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const candidate = await getCandidate(id);

    if (!candidate) notFound();

    return (
        <div>
            <FeedbackReport candidate={candidate} showPrintButton={true} />
            <div className="text-center pb-8 print:hidden">
                <Link href="/reports" className="text-blue-600 hover:underline">← Back to Candidate List</Link>
            </div>
        </div>
    );
}
