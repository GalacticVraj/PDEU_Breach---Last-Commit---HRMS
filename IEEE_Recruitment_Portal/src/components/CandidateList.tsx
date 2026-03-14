'use client';

import { useState } from 'react';
import { Candidate } from '@/lib/types';
import Link from 'next/link';
import { StatusBadge } from './StatusBadge';
import { Search, Filter, Play, ArrowRight, Trash2, UserPlus, FileText, RotateCcw } from 'lucide-react';
import { deleteCandidate, resetCandidate } from '@/lib/actions';
import { useRouter } from 'next/navigation';

import { TRACK_GROUPS, getGroupForTrack } from '@/lib/constants';

export function CandidateList({ initialCandidates, userRole, relatedTrack }: { initialCandidates: Candidate[], userRole?: string, relatedTrack?: string }) {
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [trackFilter, setTrackFilter] = useState(relatedTrack || 'All');
    const [yearFilter, setYearFilter] = useState('All');
    const [sortBy, setSortBy] = useState<'name' | 'score' | 'date' | 'status' | 'track'>('date');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
    const router = useRouter();

    // Get unique groups available in data (plus static ones to ensure they appear)
    const availableTracks = Array.from(new Set(initialCandidates.map(c => getGroupForTrack(c.track))));
    // Merge with static keys to ensure filtering works even if no one applied yet, but simpler to just show what's available + standard groups
    const distinctGroups = Array.from(new Set([...Object.keys(TRACK_GROUPS), ...availableTracks])).sort();
    const tracks = ['All', ...distinctGroups];

    // Sorting Helper
    const handleSort = (field: 'name' | 'score' | 'date' | 'status' | 'track') => {
        if (sortBy === field) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(field);
            setSortOrder('desc');
        }
    };

    // Icon Helper
    const SortIcon = ({ field }: { field: 'name' | 'score' | 'date' | 'status' | 'track' }) => {
        if (sortBy !== field) return <span className="opacity-20 ml-1">⇅</span>;
        return <span className="ml-1 text-slate-800">{sortOrder === 'asc' ? '↑' : '↓'}</span>;
    };


    const filtered = initialCandidates.filter(c => {
        const term = search.toLowerCase();
        const matchesSearch =
            c.name.toLowerCase().includes(term) ||
            c.email.toLowerCase().includes(term) ||
            (c.phone && c.phone.toLowerCase().includes(term)) ||
            (c.rollNo && c.rollNo.toLowerCase().includes(term));

        const matchesStatus = statusFilter === 'All' || c.status === statusFilter;

        // Updated Track Logic: Check if candidate track belongs to the selected Group
        let matchesTrack = true;
        if (trackFilter !== 'All') {
            const group = TRACK_GROUPS[trackFilter];
            if (group) {
                // If selected filter is a Group (e.g. Technical), check if candidate is in subtracks
                matchesTrack = group.includes(c.track) || c.track === trackFilter;
            } else {
                // Exact match for ungrouped tracks
                matchesTrack = c.track === trackFilter;
            }
        }

        const matchesYear = yearFilter === 'All' || c.year === yearFilter;
        return matchesSearch && matchesStatus && matchesTrack && matchesYear;
    });

    const getScore = (c: Candidate) => {
        const targetTrack = trackFilter !== 'All' ? trackFilter : relatedTrack;
        if (targetTrack && c.departmentScores && c.departmentScores[targetTrack]) {
            return c.departmentScores[targetTrack];
        }
        return c.averageScore || 0;
    };

    const sorted = [...filtered].sort((a, b) => {
        if (sortBy === 'name') {
            return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        }
        if (sortBy === 'score') {
            const sA = getScore(a);
            const sB = getScore(b);
            return sortOrder === 'asc' ? sA - sB : sB - sA;
        }
        if (sortBy === 'date') {
            // Sort by Interview Start Time if available, else CreatedAt
            const dA = a.interviewStartTime || a.createdAt || '';
            const dB = b.interviewStartTime || b.createdAt || '';
            return sortOrder === 'asc' ? dA.localeCompare(dB) : dB.localeCompare(dA);
        }
        if (sortBy === 'status') {
            return sortOrder === 'asc' ? a.status.localeCompare(b.status) : b.status.localeCompare(a.status);
        }
        if (sortBy === 'track') {
            return sortOrder === 'asc' ? a.track.localeCompare(b.track) : b.track.localeCompare(a.track);
        }
        return 0;
    });

    const handleDelete = async (id: string) => {
        if (confirm('Are you sure you want to delete this candidate?')) {
            await deleteCandidate(id);
            router.refresh();
        }
    };

    const handleReset = async (id: string) => {
        if (confirm('Are you sure you want to RESET this candidate? This will clear all interview scores and status.')) {
            await resetCandidate(id);
            router.refresh();
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col xl:flex-row gap-4 justify-between">
                <div className="flex flex-col md:flex-row gap-4 flex-1">
                    <div className="relative flex-1 min-w-[200px]">
                        <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search by Name, Email, Phone..."
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <select
                        className="px-4 py-2 border border-slate-200 rounded-lg bg-white"
                        value={yearFilter}
                        onChange={(e) => setYearFilter(e.target.value)}
                    >
                        <option value="All">All Years</option>
                        <option value="FY">FY</option>
                        <option value="SY">SY</option>
                        <option value="TY">TY</option>
                        <option value="Final">Final</option>
                    </select>

                    <select
                        className="px-4 py-2 border border-slate-200 rounded-lg bg-white"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="All">All Statuses</option>
                        <option value="Pending">Pending</option>
                        <option value="In-Progress">In-Progress</option>
                        <option value="Interviewed">Interviewed</option>
                        <option value="Selected">Selected</option>
                        <option value="Rejected">Rejected</option>
                    </select>

                    <select
                        className="px-4 py-2 border border-slate-200 rounded-lg bg-white"
                        value={trackFilter}
                        onChange={(e) => setTrackFilter(e.target.value)}
                    >
                        {tracks.map(track => (
                            <option key={track} value={track}>
                                {track === 'All' ? 'All Tracks' : track}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex gap-2 items-center">
                    <select
                        className="px-4 py-2 border border-slate-200 rounded-lg bg-white font-medium text-slate-600"
                        value={`${sortBy}-${sortOrder}`}
                        onChange={(e) => {
                            const [by, order] = e.target.value.split('-');
                            setSortBy(by as any);
                            setSortOrder(order as any);
                        }}
                    >
                        <option value="date-desc">Newest First</option>
                        <option value="date-asc">Oldest First</option>
                        <option value="score-desc">Highest Score</option>
                        <option value="score-asc">Lowest Score</option>
                        <option value="name-asc">Name (A-Z)</option>
                    </select>

                    <button
                        onClick={() => router.refresh()}
                        className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-500"
                        title="Refresh List"
                    >
                        <RotateCcw size={20} />
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="p-4 text-left font-bold text-slate-500 cursor-pointer hover:bg-slate-100 select-none" onClick={() => handleSort('name')}>
                                Candidate <SortIcon field="name" />
                            </th>
                            <th className="p-4 text-left font-bold text-slate-500 cursor-pointer hover:bg-slate-100 select-none" onClick={() => handleSort('track')}>
                                Track/Year <SortIcon field="track" />
                            </th>
                            <th className="p-4 text-left font-bold text-slate-500 cursor-pointer hover:bg-slate-100 select-none" onClick={() => handleSort('score')}>
                                Rating <SortIcon field="score" />
                            </th>
                            <th className="p-4 text-left font-bold text-slate-500">Recommendation</th>
                            <th className="p-4 text-left font-bold text-slate-500 cursor-pointer hover:bg-slate-100 select-none" onClick={() => handleSort('status')}>
                                Status <SortIcon field="status" />
                            </th>
                            <th className="p-4 text-left font-bold text-slate-500">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {sorted.map((candidate) => (
                            <tr key={candidate.id} className="hover:bg-slate-50 transition-colors group">
                                <td className="p-4">
                                    <div className="font-bold text-slate-900 capitalize">{candidate.name}</div>
                                    <div className="text-xs text-slate-500">{candidate.email}</div>
                                </td>
                                <td className="p-4">
                                    <div className="font-semibold text-slate-700">{candidate.track}</div>
                                    <div className="text-xs text-slate-500">{candidate.branch} • {candidate.year}</div>
                                </td>
                                <td className="p-4">
                                    {(() => {
                                        // Contextual Score Display
                                        let score = candidate.averageScore;
                                        let label = 'Avg';
                                        let isSpecific = false;

                                        // Determine which track to look for
                                        // If manual filter is set, prioritize that.
                                        // Else if we have a relatedTrack (user's dept), use that.
                                        // Else All.
                                        const targetTrack = trackFilter !== 'All' ? trackFilter : relatedTrack;

                                        // If we have a specific target, check if that score exists
                                        if (targetTrack && candidate.departmentScores && candidate.departmentScores[targetTrack]) {
                                            score = candidate.departmentScores[targetTrack];
                                            label = targetTrack.substring(0, 4);
                                            isSpecific = true;
                                        }

                                        if (!score && isSpecific) {
                                            // Fallback: If filtered by "Web" but no Web score, check "Technical" if relatedTrack is Technical
                                            if (relatedTrack && candidate.departmentScores && candidate.departmentScores[relatedTrack]) {
                                                score = candidate.departmentScores[relatedTrack];
                                                label = relatedTrack.substring(0, 4);
                                                isSpecific = true;
                                            } else {
                                                return <span className="text-slate-300">-</span>;
                                            }
                                        }

                                        if (!score) return <span className="text-slate-300">-</span>;

                                        return (
                                            <div>
                                                <div className={`font-bold text-lg ${isSpecific ? 'text-blue-700' : 'text-slate-700'}`}>{score}</div>
                                                {isSpecific && <div className="text-[10px] uppercase font-bold text-blue-400">{label}</div>}
                                            </div>
                                        );
                                    })()}
                                </td>
                                <td className="p-4">
                                    {candidate.recommendation ? (
                                        <span className="text-xs px-2 py-1 bg-slate-100 rounded border border-slate-200 font-medium">
                                            {candidate.recommendation}
                                        </span>
                                    ) : (
                                        <span className="text-slate-300">-</span>
                                    )}
                                </td>
                                <td className="p-4">
                                    <StatusBadge status={candidate.status} />
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                                        <Link
                                            href={`/interview/${candidate.id}`}
                                            className="p-2 bg-slate-900 text-white rounded hover:bg-slate-700"
                                            title="Start Interview"
                                        >
                                            <Play size={14} />
                                        </Link>
                                        <Link
                                            href={`/reports/${candidate.id}`}
                                            className="p-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100"
                                            title="View Report"
                                        >
                                            <FileText size={14} />
                                        </Link>
                                        <Link
                                            href={`/candidates/${candidate.id}/edit`}
                                            className="p-2 bg-slate-50 text-slate-600 rounded hover:bg-slate-200"
                                            title="Edit Details"
                                        >
                                            <UserPlus size={14} />
                                        </Link>
                                        {userRole === 'SuperAdmin' && (
                                            <button
                                                onClick={() => handleReset(candidate.id)}
                                                className="p-2 text-orange-400 hover:text-orange-600 hover:bg-orange-50 rounded"
                                                title="Reset Interview Status"
                                            >
                                                <RotateCcw size={14} />
                                            </button>
                                        )}
                                        <button
                                            onClick={() => handleDelete(candidate.id)}
                                            className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded"
                                            title="Delete"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {sorted.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                                    No candidates found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
