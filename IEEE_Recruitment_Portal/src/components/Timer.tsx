'use client';

import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Timer({ initialSeconds = 1200 }: { initialSeconds?: number }) {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning && seconds > 0) {
            interval = setInterval(() => {
                setSeconds((s) => s - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning, seconds]);

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    // Color logic
    // Green: > 10 mins (600s)
    // Orange: 3-10 mins (180s - 600s)
    // Red: < 3 mins (180s)
    let colorClass = "bg-green-100 text-green-700";
    if (seconds < 600) colorClass = "bg-amber-100 text-amber-700";
    if (seconds < 180) colorClass = "bg-red-100 text-red-700 animate-pulse";

    return (
        <div className={cn("flex items-center gap-2 px-4 py-2 rounded-lg font-mono font-bold text-xl", colorClass)}>
            <Clock size={20} />
            <span>
                {String(minutes).padStart(2, '0')}:{String(remainingSeconds).padStart(2, '0')}
            </span>
            <button
                onClick={() => setIsRunning(!isRunning)}
                className="ml-2 opacity-50 hover:opacity-100 text-xs uppercase tracking-wider"
            >
                {isRunning ? 'Pause' : 'Resume'}
            </button>
        </div>
    );
}
