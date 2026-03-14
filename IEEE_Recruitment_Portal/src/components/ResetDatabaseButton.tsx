'use client';

import { resetDatabase } from '@/lib/actions';
import { useState } from 'react';
import { Trash2, AlertTriangle, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function ResetDatabaseButton() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleReset = async () => {
        if (confirm('CRITICAL WARNING: This will delete ALL candidate data and members. Are you absolutely sure?')) {
            setIsLoading(true);
            try {
                await resetDatabase();
                alert('System reset successfully.');
                router.refresh();
                router.push('/');
            } catch (error) {
                console.error(error);
                alert('Failed to reset system.');
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <button
            onClick={handleReset}
            disabled={isLoading}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 disabled:opacity-50"
        >
            {isLoading ? <Loader2 className="animate-spin" size={18} /> : <AlertTriangle size={18} />}
            {isLoading ? 'Resetting...' : 'Reset System Database'}
        </button>
    );
}
