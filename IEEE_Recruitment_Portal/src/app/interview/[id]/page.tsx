import { getCandidate, getQuestions } from '@/lib/actions';
import { InterviewSession } from '@/components/InterviewSession';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function InterviewPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const candidate = await getCandidate(id);
    const questionBank = await getQuestions();

    if (!candidate) {
        notFound();
    }

    return <InterviewSession candidate={candidate} initialQuestionBank={questionBank} />;
}
