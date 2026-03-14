'use client';

import { useState } from 'react';
import Papa from 'papaparse';
import { addCandidates } from '@/lib/actions';
import { Upload, FileText, Check, AlertCircle, Loader2 } from 'lucide-react';
import { Candidate } from '@/lib/types';

// Approximate mapping based on user request/image
const HEADER_MAPPING: Record<string, string> = {
    'Full Name': 'name',
    'Nirma E-mail': 'email',
    'Roll Number': 'rollNo',
    'Phone Number': 'phone',
    'Branch': 'branch',
    'Academic Year': 'year',
    'Which committee you are most interested in?': 'track', // Full question might vary, checking fuzzy match in logic
    'What skills or experience do you bring to this role?': 'skills',
    'Why should we select you ?': 'whyIeee'
};

export function CsvUploader() {
    const [isOpen, setIsOpen] = useState(false);
    const [parsedData, setParsedData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setError('');
        setSuccess('');

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                if (results.errors.length) {
                    setError(`Error parsing CSV: ${results.errors[0].message}`);
                    return;
                }
                setParsedData(results.data);
            },
            error: (err) => {
                setError(`File read error: ${err.message}`);
            }
        });
    };

    const processData = async () => {
        setLoading(true);
        setError('');
        try {
            const candidatesToImport: Partial<Candidate>[] = parsedData.map((row: any) => {
                const c: any = {
                    id: crypto.randomUUID(), // Generate local ID
                    createdAt: new Date().toISOString(),
                    status: 'Pending',
                    tags: [],
                    notes: '',
                    scores: { interviewer1: null, interviewer2: null },
                    averageScore: 0,
                    finalRatingAverage: 0
                };

                // Map fields
                // We iterate over the row keys and try to find matches in our mapping
                const notesParts: string[] = [];

                Object.entries(row).forEach(([key, value]) => {
                    const cleanKey = key.trim();
                    const valStr = String(value).trim();
                    if (!valStr) return;

                    // Direct Mappings
                    if (cleanKey.includes('Full Name')) c.name = valStr;
                    else if (cleanKey.includes('Nirma E-mail') || cleanKey.toLowerCase().includes('email')) c.email = valStr;
                    else if (cleanKey.includes('Phone')) c.phone = valStr;
                    else if (cleanKey.includes('Roll Number')) c.rollNo = valStr;
                    else if (cleanKey.includes('Branch')) c.branch = valStr;
                    else if (cleanKey.includes('Academic Year')) c.year = valStr;
                    else if (cleanKey.includes('What skills')) c.skills = valStr;
                    else if (cleanKey.includes('Why should we select')) c.whyIeee = valStr;
                    else if (cleanKey.includes('Which committee')) {
                        // Simplify track
                        if (valStr.toLowerCase().includes('technical')) c.track = 'Technical';
                        else if (valStr.toLowerCase().includes('design')) c.track = 'Design';
                        else if (valStr.toLowerCase().includes('management')) c.track = 'Management';
                        else if (valStr.toLowerCase().includes('marketing')) c.track = 'Marketing';
                        else if (valStr.toLowerCase().includes('editorial')) c.track = 'Editorial';
                        else if (valStr.toLowerCase().includes('logistics')) c.track = 'Logistics';
                        else c.track = valStr; // Fallback
                    }
                    else if (cleanKey.includes('Timestamp')) {
                        // ignore or save
                    }
                    else {
                        // Append other fields to notes
                        if (valStr.length > 0) {
                            notesParts.push(`${cleanKey}: ${valStr}`);
                        }
                    }
                });

                if (notesParts.length > 0) {
                    c.notes = `[Imported Details]\n` + notesParts.join('\n');
                }

                // Fallbacks
                if (!c.name) c.name = 'Unknown Candidate';
                if (!c.email) c.email = 'no-email@example.com';
                if (!c.track) c.track = 'General';
                if (!c.branch) c.branch = 'N/A';
                if (!c.year) c.year = 'N/A';

                return c as Candidate;
            });

            const result = await addCandidates(candidatesToImport as Candidate[]);

            // Handle void return (backward compatibility or if server action failed to return)
            if (result && typeof result === 'object' && 'added' in result) {
                setSuccess(`Import Complete: Added ${result.added} new candidates. Skipped ${result.skipped} duplicates.`);
            } else {
                setSuccess(`Successfully imported ${candidatesToImport.length} candidates!`);
            }

            setParsedData([]);
            setIsOpen(false);
            // Refresh logic is handled by server action revalidatePath
            setTimeout(() => window.location.reload(), 2000); // Force reload to show new data
        } catch (err: any) {
            setError('Import failed: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-bold transition-colors text-sm"
            >
                <Upload size={16} /> Import CSV
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-slate-900">Import Candidates</h3>
                            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600">✕</button>
                        </div>

                        <div className="p-6 space-y-4">
                            {!parsedData.length ? (
                                <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors relative">
                                    <input
                                        type="file"
                                        accept=".csv"
                                        onChange={handleFileUpload}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                    <div className="flex flex-col items-center gap-2 text-slate-500">
                                        <FileText size={40} className="text-slate-300" />
                                        <span className="font-bold text-slate-700">Click to upload CSV</span>
                                        <span className="text-xs">Supports Google Forms Export</span>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className="bg-green-50 text-green-700 p-3 rounded-lg flex items-center gap-2 mb-4">
                                        <Check size={16} />
                                        <span className="font-bold text-sm">Ready to import {parsedData.length} records</span>
                                    </div>
                                    <div className="max-h-[200px] overflow-y-auto border rounded-lg text-xs">
                                        <table className="w-full text-left">
                                            <thead className="bg-slate-100 text-slate-500 sticky top-0">
                                                <tr>
                                                    <th className="p-2">Name</th>
                                                    <th className="p-2">Email</th>
                                                    <th className="p-2">Roll No</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {parsedData.slice(0, 10).map((row, i) => (
                                                    <tr key={i} className="border-t">
                                                        <td className="p-2 truncate max-w-[100px]">{row['Full Name'] || row['name'] || '-'}</td>
                                                        <td className="p-2 truncate max-w-[100px]">{row['Nirma E-mail'] || row['email'] || '-'}</td>
                                                        <td className="p-2">{row['Roll Number'] || row['rollNo'] || '-'}</td>
                                                    </tr>
                                                ))}
                                                {parsedData.length > 10 && (
                                                    <tr>
                                                        <td colSpan={3} className="p-2 text-center text-slate-500 italic">...and {parsedData.length - 10} more</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                    <button onClick={() => setParsedData([])} className="text-xs text-red-500 underline mt-2">Remove / Re-upload</button>
                                </div>
                            )}

                            {error && (
                                <div className="bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2 text-sm">
                                    <AlertCircle size={16} /> {error}
                                </div>
                            )}
                            {success && (
                                <div className="bg-green-50 text-green-600 p-3 rounded-lg flex items-center gap-2 text-sm">
                                    <Check size={16} /> {success}
                                </div>
                            )}
                        </div>

                        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-2 text-slate-600 font-bold text-sm hover:bg-slate-200 rounded-lg"
                            >
                                Cancel
                            </button>
                            {parsedData.length > 0 && !success && (
                                <button
                                    onClick={processData}
                                    disabled={loading}
                                    className="px-6 py-2 bg-slate-900 text-white font-bold text-sm rounded-lg hover:bg-slate-800 flex items-center gap-2"
                                >
                                    {loading && <Loader2 size={14} className="animate-spin" />}
                                    {loading ? 'Importing...' : 'Confirm Import'}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
