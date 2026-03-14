'use client';

import { useActionState } from 'react';
import { login } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginPage() {
    const [state, formAction, isPending] = useActionState(login, null);
    const router = useRouter();

    useEffect(() => {
        if (state?.success) {
            router.push('/');
        }
    }, [state, router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#1C1C1E] relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-2xl shadow-2xl w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#FF6B00] flex items-center justify-center shadow-[0_0_20px_rgba(255,107,0,0.5)]">
                            <span className="text-white font-black text-lg">H</span>
                        </div>
                        <h1 className="text-4xl font-extrabold text-white tracking-tight">HireX</h1>
                    </div>
                    <p className="text-gray-400 text-sm">Live Interview Portal — Sign in to continue</p>
                </div>

                <form action={formAction} className="space-y-5">
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
                        <input
                            name="email"
                            type="email"
                            required
                            className="w-full p-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:ring-2 focus:ring-[#FF6B00]/50 focus:border-[#FF6B00]/50 outline-none transition-all text-sm"
                            placeholder="admin@hirex.io"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Password</label>
                        <input
                            name="password"
                            type="password"
                            required
                            className="w-full p-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:ring-2 focus:ring-[#FF6B00]/50 focus:border-[#FF6B00]/50 outline-none transition-all text-sm"
                            placeholder="••••••••"
                        />
                    </div>

                    {state?.error && (
                        <div className="p-3 bg-red-500/10 text-red-400 text-sm rounded-xl border border-red-500/20">
                            {state.error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full py-3 bg-[#FF6B00] text-white font-bold rounded-xl hover:bg-[#E55A00] transition-all disabled:opacity-50 shadow-[0_4px_20px_rgba(255,107,0,0.4)] text-sm tracking-wide"
                    >
                        {isPending ? 'Signing in...' : '⚡ Sign In to HireX'}
                    </button>

                    <div className="text-center text-xs text-gray-600 mt-2 pt-4 border-t border-white/10">
                        <p className="mb-1 font-semibold text-gray-500">Demo Credentials</p>
                        <p className="font-mono text-gray-400">admin@ieee.org / admin123</p>
                    </div>
                </form>
            </div>
        </div>
    );
}
