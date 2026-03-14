'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Candidate } from '@/lib/types';
import { Printer, CheckSquare, Square, Download, FileArchive, Loader2 } from 'lucide-react';
import { FeedbackReport } from '@/components/FeedbackReport';
import { createRoot } from 'react-dom/client';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import JSZip from 'jszip';

// Helper styles to force hex colors for html2canvas
const PRINT_STYLES = `
    .bg-white { background-color: #ffffff !important; }
    .bg-slate-50 { background-color: #f8fafc !important; }
    .bg-slate-100 { background-color: #f1f5f9 !important; }
    .bg-slate-200 { background-color: #e2e8f0 !important; }
    .bg-slate-900 { background-color: #0f172a !important; }
    .bg-blue-50 { background-color: #eff6ff !important; }
    .bg-green-100 { background-color: #dcfce7 !important; }
    
    .text-white { color: #ffffff !important; }
    .text-slate-400 { color: #94a3b8 !important; }
    .text-slate-500 { color: #64748b !important; }
    .text-slate-600 { color: #475569 !important; }
    .text-slate-800 { color: #1e293b !important; }
    .text-slate-900 { color: #0f172a !important; }
    .text-blue-600 { color: #2563eb !important; }
    .text-green-700 { color: #15803d !important; }

    .border-slate-200 { border-color: #e2e8f0 !important; }
    .border-slate-300 { border-color: #cbd5e1 !important; }
    .border-slate-900 { border-color: #0f172a !important; }
    
    .divide-slate-200 > :not([hidden]) ~ :not([hidden]) { border-color: #e2e8f0 !important; }
`;

export function ReportList({ candidates }: { candidates: Candidate[] }) {
    const [selected, setSelected] = useState<string[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState('');

    const toggleSelect = (id: string) => {
        if (selected.includes(id)) {
            setSelected(selected.filter(s => s !== id));
        } else {
            setSelected([...selected, id]);
        }
    };

    const toggleAll = () => {
        if (selected.length === candidates.length) {
            setSelected([]);
        } else {
            setSelected(candidates.map(c => c.id));
        }
    };

    const handleBulkPrint = () => {
        if (selected.length === 0) return;
        const url = `/reports/bulk?ids=${selected.join(',')}`;
        window.open(url, '_blank');
    };

    const handleBulkDownload = async (mode: 'zip' | 'merged') => {
        if (selected.length === 0) {
            alert("No candidates selected.");
            return;
        }

        setIsProcessing(true);
        setProgress('Initializing...');

        try {
            const selectedCandidates = candidates.filter(c => selected.includes(c.id));
            if (selectedCandidates.length === 0) {
                throw new Error("Selection logic error: No matching candidates found.");
            }

            // Create container for rendering 
            const container = document.createElement('div');
            container.style.position = 'fixed';
            container.style.top = '0';
            container.style.left = '0';
            container.style.width = '210mm';
            container.style.zIndex = '-9999';
            container.style.visibility = 'visible';
            // Must have some opacity to be rendered, but effectively invisible to user
            container.style.opacity = '0.01';
            container.style.pointerEvents = 'none';
            container.style.backgroundColor = '#ffffff';
            document.body.appendChild(container);

            const zip = new JSZip();
            const mergedPdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = mergedPdf.internal.pageSize.getWidth(); // 210

            let processedCount = 0;
            let lastError = "";

            for (let i = 0; i < selectedCandidates.length; i++) {
                const candidate = selectedCandidates[i];
                setProgress(`Processing ${i + 1}/${selectedCandidates.length}: ${candidate.name}`);

                // Render component to DOM
                const wrapper = document.createElement('div');
                // We use standard styles but we will inject the override style tag inside
                wrapper.style.width = '210mm';
                wrapper.style.minHeight = '297mm';
                wrapper.style.backgroundColor = '#ffffff';
                container.appendChild(wrapper);

                try {
                    const root = createRoot(wrapper);

                    // Render and wait
                    await new Promise<void>((resolve) => {
                        root.render(
                            <>
                                <style>{PRINT_STYLES}</style>
                                <div className="p-12 bg-white text-slate-900" style={{ width: '210mm', minHeight: '297mm' }}>
                                    <FeedbackReport candidate={candidate} showPrintButton={false} />
                                </div>
                            </>
                        );
                        // Increase timeout to ensure layout
                        setTimeout(resolve, 800);
                    });

                    // Debug: Check dimensions
                    if (wrapper.offsetWidth === 0 || wrapper.offsetHeight === 0) {
                        console.warn(`Zero dimensions for ${candidate.name}`); // Shouldn't happen with fixed container
                    }

                    // Capture with html2canvas
                    const canvas = await html2canvas(wrapper, {
                        scale: 1.5,
                        useCORS: true,
                        logging: false,
                        backgroundColor: '#ffffff',
                        width: wrapper.offsetWidth,
                        height: wrapper.offsetHeight,
                        windowWidth: 1200,
                        onclone: (clonedDoc) => {
                            // Double ensure opacity isn't affecting capture if html2canvas inherited it (it shouldn't usually)
                            const clonedWrapper = clonedDoc.querySelector('[data-html2canvas-ignore]') as HTMLElement; // (placeholder)
                            // Actually, html2canvas capture starts at the element we passed.
                            // We don't need to do much here if styles are correct.
                        }
                    });

                    const imgData = canvas.toDataURL('image/jpeg', 0.90);

                    if (imgData === 'data:,') {
                        console.warn(`Empty image data for ${candidate.name}`);
                        lastError = `Empty image data for ${candidate.name}`;
                        root.unmount();
                        wrapper.remove();
                        continue;
                    }

                    const imgProps = mergedPdf.getImageProperties(imgData);
                    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

                    if (mode === 'zip') {
                        const pdf = new jsPDF('p', 'mm', 'a4');
                        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
                        const blob = pdf.output('blob');
                        const safeName = (candidate.name || 'Unknown').replace(/[^a-z0-9]/gi, '_');
                        const filename = `${candidate.rollNo || 'NA'}_${safeName}.pdf`;
                        zip.file(filename, blob);
                        processedCount++;
                    } else {
                        if (processedCount > 0) mergedPdf.addPage();
                        mergedPdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
                        processedCount++;
                    }

                    root.unmount();
                } catch (innerError: any) {
                    console.error(`Failed to process candidate ${candidate.id}:`, innerError);
                    lastError = innerError.message || "Unknown error";
                }

                wrapper.remove();
                // Small breathing room
                await new Promise(r => setTimeout(r, 50));
            }

            document.body.removeChild(container);

            if (processedCount === 0) {
                alert(`Failed to generate any valid reports. Last error: ${lastError}`);
                return;
            }

            if (mode === 'zip') {
                setProgress('Compressing ZIP...');
                const content = await zip.generateAsync({ type: 'blob' });
                const a = document.createElement('a');
                a.href = URL.createObjectURL(content);
                a.download = `reports_batch_${new Date().toISOString().slice(0, 10)}.zip`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            } else {
                setProgress('Saving PDF...');
                mergedPdf.save(`merged_reports_${new Date().toISOString().slice(0, 10)}.pdf`);
            }

        } catch (error: any) {
            console.error(error);
            alert(`An error occurred: ${error.message || 'Unknown error'}`);
        } finally {
            setIsProcessing(false);
            setProgress('');
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h2 className="font-bold text-lg">Individual Candidate Reports</h2>

                {selected.length > 0 && (
                    <div className="bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg text-sm font-medium text-slate-700">
                        {selected.length} Selected
                    </div>
                )}

                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={toggleAll}
                        className="text-sm font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-2 px-3 py-2"
                        disabled={isProcessing}
                    >
                        {selected.length === candidates.length && candidates.length > 0 ? <CheckSquare size={16} /> : <Square size={16} />}
                        All
                    </button>

                    {/* Printer View */}
                    <button
                        onClick={handleBulkPrint}
                        disabled={selected.length === 0 || isProcessing}
                        className="bg-white border border-slate-300 text-slate-700 px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-50 disabled:opacity-50 transition-colors"
                        title="Open Print View"
                    >
                        <Printer size={16} />
                        <span className="hidden sm:inline">View/Print</span>
                    </button>

                    {/* Merged PDF */}
                    <button
                        onClick={() => handleBulkDownload('merged')}
                        disabled={selected.length === 0 || isProcessing}
                        className="bg-slate-900 text-white px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-700 disabled:opacity-50 transition-colors"
                        title="Download Single Merged PDF"
                    >
                        {isProcessing ? <Loader2 size={16} className="animate-spin" /> : <FileArchive size={16} />}
                        <span className="hidden sm:inline">Merged PDF</span>
                    </button>

                    {/* ZIP Download */}
                    <button
                        onClick={() => handleBulkDownload('zip')}
                        disabled={selected.length === 0 || isProcessing}
                        className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-blue-700 disabled:opacity-50 transition-colors"
                        title="Download ZIP of Individual PDFs"
                    >
                        {isProcessing ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
                        <span className="hidden sm:inline">ZIP</span>
                    </button>
                </div>
            </div>

            {isProcessing && (
                <div className="mb-4 bg-blue-50 text-blue-800 px-4 py-3 rounded-lg text-sm flex items-center gap-3">
                    <Loader2 size={18} className="animate-spin" />
                    <span className="font-semibold">{progress}</span>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {candidates.map(c => (
                    <div key={c.id} className={`relative block p-4 border rounded-lg transition-colors group ${selected.includes(c.id) ? 'border-blue-500 bg-blue-50' : 'border-slate-100 hover:bg-slate-50'}`}>
                        <div className="absolute top-4 right-4 z-10">
                            <input
                                type="checkbox"
                                checked={selected.includes(c.id)}
                                onChange={(e) => { e.stopPropagation(); toggleSelect(c.id); }}
                                className="w-5 h-5 cursor-pointer accent-blue-600"
                            />
                        </div>
                        <div onClick={() => toggleSelect(c.id)} className="cursor-pointer">
                            <div className="font-bold text-slate-900 group-hover:text-blue-600 mb-1 pr-8">{c.name}</div>
                            <div className="text-sm text-slate-500 mb-2">{c.branch} • {c.year}</div>

                            <div className="flex justify-between items-center">
                                <span className="text-xs font-mono bg-slate-200 px-2 py-0.5 rounded text-slate-600">
                                    {c.rollNo || 'N/A'}
                                </span>
                                <div className={`text-xs font-bold px-2 py-1 rounded inline-block ${c.status === 'Interviewed' || c.status === 'Selected' || c.status === 'Rejected' || (c.scores?.interviewer1 || c.scores?.interviewer2) ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                                    {c.status === 'Interviewed' || c.status === 'Selected' || c.status === 'Rejected' || (c.scores?.interviewer1 || c.scores?.interviewer2) ? 'Scored' : 'Pending'}
                                </div>
                            </div>
                        </div>
                        <Link href={`/reports/${c.id}`} className="block mt-3 text-xs text-blue-600 hover:underline">
                            View Details &rarr;
                        </Link>
                    </div>
                ))}
                {candidates.length === 0 && <p className="text-slate-500 col-span-full text-center py-8">No candidates available.</p>}
            </div>
        </div>
    );
}
