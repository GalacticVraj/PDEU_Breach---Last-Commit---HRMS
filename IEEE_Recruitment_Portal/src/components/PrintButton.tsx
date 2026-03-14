'use client';

import { Printer } from 'lucide-react';

export function PrintButton() {
    return (
        <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 text-sm font-semibold hover:bg-slate-50 print:hidden transition-colors"
        >
            <Printer size={16} />
            <span>Print / Save to PDF</span>
        </button>
    );
}
