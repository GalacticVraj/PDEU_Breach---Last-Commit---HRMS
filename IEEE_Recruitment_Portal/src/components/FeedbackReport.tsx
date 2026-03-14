import { Candidate } from '@/lib/types';
import { PrintButton } from '@/components/PrintButton';

export function FeedbackReport({ candidate, showPrintButton = true }: { candidate: Candidate, showPrintButton?: boolean }) {
    // --- Aggregation Logic ---
    const s1 = candidate.scores?.interviewer1;
    const s2 = candidate.scores?.interviewer2;
    // Count valid interviewers
    const count = (s1 ? 1 : 0) + (s2 ? 1 : 0);

    const getAvg = (val1: number | undefined, val2: number | undefined) => {
        let sum = 0;
        if (val1 !== undefined) sum += val1;
        if (val2 !== undefined) sum += val2;
        return count === 0 ? 0 : (sum / count);
    };

    // Calculate Averages on 1-10 scale
    const avgTech = getAvg(s1?.technical, s2?.technical);
    const avgComm = getAvg(s1?.communication, s2?.communication);
    const avgTeam = getAvg(s1?.teamwork, s2?.teamwork); // Exp
    const avgLead = getAvg(s1?.leadership, s2?.leadership); // Prob
    const avgInit = getAvg(s1?.initiative, s2?.initiative); // Ded

    // Map to 0-2 Scale
    const scores = {
        domain: (avgTech / 5).toFixed(1),
        comm: (avgComm / 5).toFixed(1),
        exp: (avgTeam / 5).toFixed(1),
        prob: (avgLead / 5).toFixed(1),
        ded: (avgInit / 5).toFixed(1),
        total: ((avgTech + avgComm + avgTeam + avgLead + avgInit) / 5).toFixed(1)
    };

    // --- Remarks Generation ---
    const generateFeedback = () => {
        const feedbackParts = [];

        // Helper to clean and extract strings without labels
        const cleanVal = (val: string | undefined) => {
            if (!val) return null;
            const trimmed = val.trim();
            if (trimmed.length === 0) return null;
            // Remove newlines and excess spaces to force inline flow
            return trimmed.replace(/\s+/g, ' ');
        };

        // Helper to extract all text fields from a score sheet
        const getInterviewerComments = (s: import('@/lib/types').ScoreSheet | null | undefined) => {
            if (!s) return [];
            const comments = [];

            // Just push the values directly, smoothed into sentences if needed
            const fb = cleanVal(s.feedback);
            if (fb) comments.push(fb);

            const sel = cleanVal(s.selectionReason);
            if (sel) comments.push(sel);

            const rej = cleanVal(s.rejectionReason);
            if (rej) comments.push(`Concerns: ${rej}.`);

            const str = cleanVal(s.strengths);
            if (str) comments.push(`We observed strengths in ${str}.`);

            const imp = cleanVal(s.improvements);
            if (imp) comments.push(`Areas for growth include ${imp}.`);

            const vis = cleanVal(s.vision);
            if (vis) comments.push(`Regarding vision: ${vis}.`);

            const beh = cleanVal(s.behavioralResponse);
            if (beh) comments.push(`Behavioral response noted: ${beh}.`);

            const role = cleanVal(s.roleUnderstandingComments);
            if (role) comments.push(`Role understanding: ${role}.`);

            return comments;
        };

        // 1. Manual Comments (Deduplicated across interviewers)
        const uniqueComments = new Set<string>();

        // Include root-level notes - CAREFUL CLEANING needed
        // The user showed "Imported Details..." with newlines. We must flattened it.
        if (candidate.notes?.trim()) {
            // Remove "[Imported Details]" tag if present to clean it up
            let rawNotes = candidate.notes.replace(/\[Imported Details\]/gi, '').trim();
            // Flatten newlines to periods or spaces
            // "Question: Answer" -> "Question: Answer."
            const flattened = rawNotes.replace(/\n+/g, '. ').replace(/\s+/g, ' ');
            uniqueComments.add(flattened);
        }

        // Include Tags - formatted as narrative
        if (candidate.tags && candidate.tags.length > 0) {
            uniqueComments.add(`Key attributes identified: ${candidate.tags.join(', ')}.`);
        }

        getInterviewerComments(s1).forEach(c => uniqueComments.add(c));
        getInterviewerComments(s2).forEach(c => uniqueComments.add(c));

        // Add manual comments as a single unified paragraph
        if (uniqueComments.size > 0) {
            // Join with space to form one block
            feedbackParts.push(Array.from(uniqueComments).join(' '));
        }

        // 2. Auto-Generated Analysis
        const total = parseFloat(scores.total);
        const dScore = parseFloat(scores.domain);
        const cScore = parseFloat(scores.comm);
        const pScore = parseFloat(scores.prob);
        const dedScore = parseFloat(scores.ded);

        // Opening based on Total Score
        if (total >= 8) {
            feedbackParts.push("Overall, we were highly impressed with your performance and the potential you demonstrated during the interview.");
        } else if (total >= 6) {
            feedbackParts.push("Overall, you demonstrated good potential and a solid understanding of several key areas.");
        } else if (total >= 4) {
            feedbackParts.push("We appreciate your participation. You showed some promise, though there are key areas that need further development.");
        } else {
            feedbackParts.push("Thank you for your interest. While your current profile needs more preparation, we appreciate the effort you put into the process.");
        }

        // Strengths
        const highs = [];
        if (dScore >= 1.5) highs.push("technical/domain understanding");
        if (cScore >= 1.5) highs.push("communication skills");
        if (dedScore >= 1.5) highs.push("enthusiasm and dedication");
        if (pScore >= 1.5) highs.push("problem-solving approach");

        if (highs.length > 0) {
            feedbackParts.push(`We particularly noted your strengths in ${highs.join(', ')}.`);
        }

        // Areas for Growth
        const lows = [];
        if (dScore < 1.0) lows.push("deepening your core domain knowledge");
        if (cScore < 1.0) lows.push("practicing more structured articulation of ideas");
        if (pScore < 1.0) lows.push("working on analytical problem-solving through practical examples");
        if (dedScore < 1.0 && lows.length === 0) lows.push("exploring more proactive ways to contribute to projects");

        if (lows.length > 0) {
            feedbackParts.push(`To strengthen your profile for future opportunities, we encourage you to focus on ${lows.join(' and ')}.`);
        } else if (total < 6 && lows.length === 0) {
            feedbackParts.push("We encourage you to gain more hands-on experience through practical projects to build further depth.");
        }

        // 3. Closing Line
        feedbackParts.push("We wish you the very best in your academic and professional journey.");

        return feedbackParts.join('\n\n');
    };

    const feedback = generateFeedback();

    return (
        <div
            style={{
                pageBreakAfter: 'always',
                backgroundColor: '#ffffff',
                color: '#0f172a',
                fontFamily: 'serif'
            }}
            className="max-w-[210mm] mx-auto p-12 print:p-0 print:max-w-none min-h-screen flex flex-col print:block print:h-auto"
        >

            {/* Header */}
            <div
                style={{ borderBottom: '4px solid #0f172a', paddingBottom: '1rem', marginBottom: '2rem' }}
                className="flex justify-between items-end print:mb-6"
            >
                <div>
                    <h1 style={{ color: '#0f172a' }} className="text-3xl font-extrabold uppercase tracking-tight">Interview Scorecard</h1>
                    <p style={{ color: '#64748b' }} className="text-sm font-semibold uppercase tracking-widest">IEEE Recruitment Drive</p>
                </div>
                {showPrintButton && (
                    <div className="text-right print:hidden">
                        <PrintButton />
                    </div>
                )}
            </div>

            {/* Candidate Details Grid */}
            <div
                style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0', borderWidth: '1px', padding: '1.5rem', marginBottom: '2rem' }}
                className="rounded-lg print:p-4 print:mb-6 print:border-slate-900"
            >
                <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
                    <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                        <span style={{ color: '#94a3b8' }} className="block text-xs uppercase font-bold">Candidate Name</span>
                        <span style={{ color: '#0f172a' }} className="block text-lg font-bold">{candidate.name}</span>
                    </div>
                    <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                        <span style={{ color: '#94a3b8' }} className="block text-xs uppercase font-bold">Track / Position</span>
                        <span style={{ color: '#0f172a' }} className="block text-lg font-bold">{candidate.track}</span>
                    </div>
                    <div>
                        <span style={{ color: '#94a3b8' }} className="block text-xs uppercase font-bold">Roll Number</span>
                        <span style={{ color: '#0f172a' }} className="block text-base font-semibold">{candidate.rollNo || 'N/A'}</span>
                    </div>
                    <div>
                        <span style={{ color: '#94a3b8' }} className="block text-xs uppercase font-bold">Department / Year</span>
                        <span style={{ color: '#0f172a' }} className="block text-base font-semibold">{candidate.branch} • {candidate.year}</span>
                    </div>
                </div>
            </div>

            {/* Score Table */}
            <div className="mb-8 print:mb-6">
                <h3 style={{ borderLeft: '4px solid #0f172a', paddingLeft: '0.5rem', color: '#0f172a' }} className="font-bold uppercase text-sm mb-2">Performance Assessment</h3>
                <table style={{ borderColor: '#0f172a' }} className="w-full text-sm border-collapse border text-left">
                    <thead style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
                        <tr>
                            <th className="p-3 w-1/2">Evaluation Parameter</th>
                            <th className="p-3 text-center w-1/4">Score Obtained</th>
                            <th className="p-3 text-center w-1/4">Max Score</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {/* Inline styles for border-colors in divide-y are tricky, applied to TDs */}
                        <tr>
                            <td style={{ borderBottom: '1px solid #e2e8f0' }} className="p-3 font-semibold">Domain Skill <span style={{ color: '#64748b' }} className="block text-[10px] font-normal">Technical / Management Aptitude</span></td>
                            <td style={{ borderBottom: '1px solid #e2e8f0', color: '#0f172a' }} className="p-3 text-center font-bold text-lg">{scores.domain}</td>
                            <td style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b' }} className="p-3 text-center">2.0</td>
                        </tr>
                        <tr>
                            <td style={{ borderBottom: '1px solid #e2e8f0' }} className="p-3 font-semibold">Communication <span style={{ color: '#64748b' }} className="block text-[10px] font-normal">Clarity & Articulation</span></td>
                            <td style={{ borderBottom: '1px solid #e2e8f0', color: '#0f172a' }} className="p-3 text-center font-bold text-lg">{scores.comm}</td>
                            <td style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b' }} className="p-3 text-center">2.0</td>
                        </tr>
                        <tr>
                            <td style={{ borderBottom: '1px solid #e2e8f0' }} className="p-3 font-semibold">Experience <span style={{ color: '#64748b' }} className="block text-[10px] font-normal">Relevant Past Work / Teamwork</span></td>
                            <td style={{ borderBottom: '1px solid #e2e8f0', color: '#0f172a' }} className="p-3 text-center font-bold text-lg">{scores.exp}</td>
                            <td style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b' }} className="p-3 text-center">2.0</td>
                        </tr>
                        <tr>
                            <td style={{ borderBottom: '1px solid #e2e8f0' }} className="p-3 font-semibold">Problem Solving <span style={{ color: '#64748b' }} className="block text-[10px] font-normal">Critical Thinking & Approach</span></td>
                            <td style={{ borderBottom: '1px solid #e2e8f0', color: '#0f172a' }} className="p-3 text-center font-bold text-lg">{scores.prob}</td>
                            <td style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b' }} className="p-3 text-center">2.0</td>
                        </tr>
                        <tr>
                            <td style={{ borderBottom: '1px solid #e2e8f0' }} className="p-3 font-semibold">Dedication <span style={{ color: '#64748b' }} className="block text-[10px] font-normal">Initiative & Enthusiasm</span></td>
                            <td style={{ borderBottom: '1px solid #e2e8f0', color: '#0f172a' }} className="p-3 text-center font-bold text-lg">{scores.ded}</td>
                            <td style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b' }} className="p-3 text-center">2.0</td>
                        </tr>
                        <tr style={{ backgroundColor: '#f1f5f9', borderTop: '2px solid #0f172a' }}>
                            <td style={{ color: '#0f172a' }} className="p-3 font-bold uppercase text-right">Overall Score</td>
                            <td style={{ color: '#0f172a' }} className="p-3 text-center font-extrabold text-2xl">{scores.total}</td>
                            <td style={{ color: '#0f172a' }} className="p-3 text-center font-bold">10.0</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Feedback Section */}
            <div className="flex-1">
                <h3 style={{ borderLeft: '4px solid #0f172a', paddingLeft: '0.5rem', color: '#0f172a' }} className="font-bold uppercase text-sm mb-2">Feedback & Comments</h3>
                <div
                    style={{ borderColor: '#cbd5e1', backgroundColor: '#f8fafc' }}
                    className="border rounded p-4 min-h-[120px] print:min-h-[100px]"
                >
                    <p style={{ color: '#1e293b' }} className="whitespace-pre-wrap text-sm leading-relaxed italic">
                        {feedback}
                    </p>
                </div>

                <div style={{ borderColor: '#e2e8f0', color: '#94a3b8' }} className="mt-8 text-[10px] text-center border-t pt-4">
                    <p className="uppercase tracking-widest">IEEE Student Branch Recruitment Committee</p>
                    <p className="mt-1">Generated at {new Date().toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
}
