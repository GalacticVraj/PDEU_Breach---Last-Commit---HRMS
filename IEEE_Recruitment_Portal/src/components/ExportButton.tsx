'use client';

import { Candidate } from '@/lib/types';
import { Download } from 'lucide-react';

export function ExportButton({ candidates }: { candidates: Candidate[] }) {
    const handleExport = () => {
        // Define headers
        const headers = [
            'Name', 'Roll Number', 'Domain Skill (2)', 'Communication (2)', 'Experience (2)', 'Problem Solving (2)', 'Dedication (2)', 'Total (10)', 'Remarks'
        ];

        // Map data to rows
        const rows = candidates.map(c => {
            const s1 = c.scores?.interviewer1;
            const s2 = c.scores?.interviewer2;
            const count = (s1 ? 1 : 0) + (s2 ? 1 : 0);

            const getAvg = (key: keyof import('@/lib/types').ScoreSheet) => {
                let sum = 0;
                if (s1 && s1[key] !== undefined) sum += Number(s1[key]);
                if (s2 && s2[key] !== undefined) sum += Number(s2[key]);
                return count > 0 ? (sum / count).toFixed(1) : '0.0';
            };

            const domain = (Number(getAvg('technical')) / 5).toFixed(1);
            const comm = (Number(getAvg('communication')) / 5).toFixed(1);
            const exp = (Number(getAvg('teamwork')) / 5).toFixed(1);
            const prob = (Number(getAvg('leadership')) / 5).toFixed(1);
            const ded = (Number(getAvg('initiative')) / 5).toFixed(1);
            const totalScore = (Number(c.averageScore) / 5).toFixed(1);
            const calcScore = (val: string | undefined) => parseFloat(val || '0');

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
                const t = parseFloat(totalScore); // out of 10 already
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
                `"${c.name}"`,
                c.rollNo || '',
                domain,
                comm,
                exp,
                prob,
                ded,
                totalScore,
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
        link.setAttribute('download', 'ieee_candidates_export.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-bold text-sm shadow-sm transition-all active:scale-95"
        >
            <Download size={16} /> Export CSV
        </button>
    );
}
