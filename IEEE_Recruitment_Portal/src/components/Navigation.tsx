'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Users, Video, BookOpen, GraduationCap, Trophy, LogOut, User as UserIcon, Shield } from 'lucide-react';
import { logout } from '@/lib/auth';
import { User } from '@/lib/types';

const navItems = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard, roles: ['SuperAdmin', 'DeptHead', 'Interviewer', 'null'] },
    { name: 'Candidates', href: '/candidates', icon: Users, roles: ['SuperAdmin', 'DeptHead', 'Interviewer'] },
    { name: 'Live Interview', href: '/interview', icon: Video, roles: ['Interviewer', 'DeptHead', 'SuperAdmin'] },
    { name: 'Question Bank', href: '/qbank', icon: BookOpen, roles: ['SuperAdmin', 'DeptHead', 'Interviewer'] },
    { name: 'Scoring Guide', href: '/guide', icon: GraduationCap, roles: ['SuperAdmin', 'DeptHead', 'Interviewer'] },
    { name: 'Scoreboard', href: '/scoreboard', icon: Trophy, roles: ['SuperAdmin', 'DeptHead', 'Interviewer'] },
    { name: 'Settings', href: '/settings', icon: Shield, roles: ['SuperAdmin'] },
];

export function Navigation({ user }: { user?: Partial<User> | null }) {
    const pathname = usePathname();

    if (!user) return null;

    return (
        <nav className="bg-[#1C1C1E] text-white h-screen w-64 fixed left-0 top-0 flex flex-col shadow-xl z-50">
            <div className="p-6 border-b border-white/10">
                <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 rounded-lg bg-[#FF6B00] flex items-center justify-center shadow-[0_0_12px_rgba(255,107,0,0.5)]">
                        <span className="text-white font-black text-xs">H</span>
                    </div>
                    <h1 className="text-xl font-extrabold tracking-tight text-white">HireX</h1>
                </div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Live Interview Portal</p>
                {user.departmentId && <div className="mt-2 text-[10px] bg-[#FF6B00]/20 p-1 rounded text-[#FF6B00] border border-[#FF6B00]/30 text-center">{user.departmentId.replace('dept_', '').toUpperCase()} DEPT</div>}
            </div>

            <div className="flex-1 overflow-y-auto py-6 space-y-1">
                {navItems.filter(item => item.roles.includes(user.role || 'null')).map((item) => {
                    const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-6 py-3 text-sm font-medium transition-all",
                                isActive
                                    ? "bg-[#FF6B00]/15 text-[#FF6B00] border-r-4 border-[#FF6B00] shadow-[inset_0_0_12px_rgba(255,107,0,0.08)]"
                                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                            )}
                        >
                            <item.icon size={18} />
                            {item.name}
                        </Link>
                    );
                })}
            </div>

            <div className="p-6 border-t border-white/10 bg-white/5">
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#FF6B00]/20 p-2 rounded-full border border-[#FF6B00]/30">
                        <UserIcon size={16} className="text-[#FF6B00]" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-white">{user.name}</div>
                        <div className="text-xs text-gray-400 flex items-center gap-1">
                            <Shield size={10} /> {user.role}
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => logout()}
                    className="w-full py-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg flex items-center justify-center gap-2 text-xs font-bold hover:bg-red-500/20 transition-all"
                >
                    <LogOut size={14} /> Sign Out
                </button>
            </div>
        </nav>
    );
}

