'use client';

import { useState } from 'react';
import Papa from 'papaparse';
import { addCandidates } from '@/lib/actions';
import { Candidate } from '@/lib/types';
import { generateId as genId } from '@/lib/utils';
import { Upload, FileText, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function CSVImporter() {
    const [isImporting, setIsImporting] = useState(false);
    const router = useRouter();

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsImporting(true);

        Papa.parse(file, {
            header: true,
            complete: async (results) => {
                const newCandidates: Candidate[] = results.data
                    .filter((row: any) => row['Full Name'] || row['Name']) // Basic validation
                    .map((row: any) => ({
                        id: genId(),
                        name: row['Full Name'] || row['Name'] || 'Unknown',
                        branch: row['Branch'] || '',
                        year: row['Year'] || '',
                        email: row['Email'] || '',
                        phone: row['Phone'] || '',
                        track: row['Track'] || row['Interest Area'] || 'General',
                        whyIeee: row['Why IEEE?'] || '',
                        skills: row['Skills'] || '',
                        pastActivities: row['Past Activities'] || '',
                        scores: { interviewer1: null, interviewer2: null },
                        averageScore: 0,
                        finalRatingAverage: 0,
                        notes: '',
                        tags: [],
                        status: 'Pending',
                        createdAt: new Date().toISOString(),
                    }));

                if (newCandidates.length > 0) {
                    await addCandidates(newCandidates);
                    router.refresh();
                }
                setIsImporting(false);
            },
            error: (error) => {
                console.error('CSV Error:', error);
                setIsImporting(false);
            }
        });
    };

    return (
        <div className="relative">
            <input
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                disabled={isImporting}
            />
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50">
                {isImporting ? <Loader2 className="animate-spin" size={18} /> : <Upload size={18} />}
                <span>{isImporting ? 'Importing...' : 'Import CSV'}</span>
            </button>
        </div>
    );
}
