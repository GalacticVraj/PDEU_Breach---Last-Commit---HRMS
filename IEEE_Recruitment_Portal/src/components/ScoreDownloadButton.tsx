'use client';

import { Download } from 'lucide-react';
import { Candidate } from '@/lib/types';

export function ScoreDownloadButton({ candidates }: { candidates: Candidate[] }) {

    const handleDownload = () => {
        if (!candidates || candidates.length === 0) {
            alert('No candidates to download.');
            return;
        }

        const headers = [
            'Name',
            'Roll No',
            'Email',
            'Phone',
            'Branch',
            'Year',
            'Track',
            'Status',
            'Domain Skill (2)',
            'Communication (2)',
            'Experience (2)',
            'Problem Solving (2)',
            'Dedication (2)',
            'Total (10)',
            'Remarks'
        ];

        const rows = candidates.map(c => {
            // Calculate averages for the 5 parameters across interviewers if available
            // Or just take the average of totals? 
            // The user request showed a single row per candidate with granular scores.
            // If there are 2 interviewers, we should probably average them or show max?
            // "Divide the 10 marks into these 5 basic parameters... keep grading consistent"
            // Let's Average the available scores.

            const s1 = c.scores?.interviewer1;
            const s2 = c.scores?.interviewer2;
            const count = (s1 ? 1 : 0) + (s2 ? 1 : 0);

            const getAvg = (key: keyof import('@/lib/types').ScoreSheet) => {
                let sum = 0;
                if (s1 && s1[key] !== undefined) sum += Number(s1[key]);
                if (s2 && s2[key] !== undefined) sum += Number(s2[key]);
                return count > 0 ? (sum / count).toFixed(1) : '0.0';
            };

            // Map legacy 1-10 to new 0-2 scale
            // Technical -> Domain Skill
            const domain = (Number(getAvg('technical')) / 5).toFixed(1);
            // Communication -> Communication
            const comm = (Number(getAvg('communication')) / 5).toFixed(1);
            // Teamwork -> Experience
            const exp = (Number(getAvg('teamwork')) / 5).toFixed(1);
            // Leadership -> Problem Solving
            const prob = (Number(getAvg('leadership')) / 5).toFixed(1);
            // Initiative -> Dedication
            const ded = (Number(getAvg('initiative')) / 5).toFixed(1);

            // Total Score (10)
            // Average Score was out of 50. So /5 to get /10.
            const totalScore = (Number(c.averageScore) / 5).toFixed(1);

            // Replicate robust feedback logic
            const generateValidFeedback = () => {
                const parts = [];
                const uniqueComments = new Set<string>();

                // Helper to extract
                const extract = (s: any) => {
                    const c = [];
                    if (s?.feedback?.trim()) c.push(s.feedback.trim());
                    if (s?.selectionReason?.trim()) c.push(s.selectionReason.trim());
                    if (s?.rejectionReason?.trim()) c.push(s.rejectionReason.trim());
                    if (s?.strengths?.trim()) c.push(`Notably, strengths were observed in: ${s.strengths.trim()}.`);
                    if (s?.improvements?.trim()) c.push(`Areas for potential improvement include: ${s.improvements.trim()}.`);
                    if (s?.vision?.trim()) c.push(`Regarding vision: ${s.vision.trim()}.`);
                    return c;
                };

                // Merge s1 and s2 comments AND root-level notes
                if (c.notes?.trim()) uniqueComments.add(c.notes.trim());
                if (c.tags?.length > 0) uniqueComments.add(`Key attributes noted: ${c.tags.join(', ')}.`);

                [...extract(s1), ...extract(s2)].forEach(t => uniqueComments.add(t));
                if (uniqueComments.size > 0) parts.push(Array.from(uniqueComments).join(' '));

                // Auto-analysis
                // totalScore is string fixed to 1 decimal
                const t = parseFloat(totalScore);
                const d = parseFloat(domain);
                const cVal = parseFloat(comm);
                const p = parseFloat(prob);
                const de = parseFloat(ded);

                // Strengths
                const highs = [];
                if (d >= 1.5) highs.push("technical/domain");
                if (cVal >= 1.5) highs.push("communication");
                if (de >= 1.5) highs.push("enthusiasm");
                if (p >= 1.5) highs.push("problem-solving");
                if (highs.length > 0) parts.push(`Scores indicate strengths in: ${highs.join(', ')}.`);

                // Growth
                const lows = [];
                if (d < 1.0) lows.push("domain knowledge");
                if (cVal < 1.0) lows.push("articulation");
                if (p < 1.0) lows.push("analytical thinking");
                if (lows.length > 0) parts.push(`Focus on: ${lows.join(', ')}.`);

                // Closing
                parts.push("We wish you the very best.");

                return parts.join(' ');
            };

            const remarks = generateValidFeedback();

            return [
                c.name,
                c.rollNo || '',
                c.email,
                c.phone,
                c.branch,
                c.year,
                c.track,
                c.status,
                domain,
                comm,
                exp,
                prob,
                ded,
                totalScore, // Total (10)
                `"${remarks.replace(/"/g, '""')}"`
            ];
        });

        const csvContent = [
            headers.join(','),
            ...rows.map(row => row.join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'recruitment_scoreboard.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 border border-blue-700 rounded-lg text-white text-sm font-semibold hover:bg-blue-700 shadow-sm transition-colors"
        >
            <Download size={16} />
            <span>Download CSV</span>
        </button>
    );
}
