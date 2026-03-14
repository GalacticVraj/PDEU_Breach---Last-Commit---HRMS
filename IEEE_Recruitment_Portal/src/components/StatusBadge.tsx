import { cn } from '@/lib/utils';
import { CandidateStatus } from '@/lib/types';

const statusStyles = {
    'Pending': 'bg-slate-100 text-slate-600 border-slate-200',
    'In-Progress': 'bg-amber-100 text-amber-700 border-amber-200',
    'Interviewed': 'bg-blue-100 text-blue-700 border-blue-200',
    'Selected': 'bg-green-100 text-green-700 border-green-200',
    'Backup': 'bg-purple-100 text-purple-700 border-purple-200',
    'Rejected': 'bg-red-100 text-red-700 border-red-200',
};

export function StatusBadge({ status }: { status: CandidateStatus }) {
    return (
        <span className={cn(
            "px-2.5 py-0.5 rounded-full text-xs font-medium border",
            statusStyles[status] || statusStyles['Pending']
        )}>
            {status}
        </span>
    );
}
