import { getCandidates } from '@/lib/actions';
import { PrintButton } from '@/components/PrintButton';
import { ScoreboardTable } from '@/components/ScoreboardTable';

import { ScoreDownloadButton } from '@/components/ScoreDownloadButton';

export const dynamic = 'force-dynamic';

export default async function ScoreboardPage() {
    const candidates = await getCandidates();

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-slate-900">Scoreboard</h1>
                <div className="flex gap-3">
                    <ScoreDownloadButton candidates={candidates} />
                    <PrintButton />
                </div>
            </div>

            <ScoreboardTable candidates={candidates} />
        </div>
    );
}
