'use client';

import { useState } from 'react';
import { Candidate } from '@/lib/types';
import { StatusBadge } from './StatusBadge';
import { Search } from 'lucide-react';
import { TRACK_GROUPS, getGroupForTrack } from '@/lib/constants';

export function ScoreboardTable({ candidates }: { candidates: Candidate[] }) {
    const [search, setSearch] = useState('');
    const [trackFilter, setTrackFilter] = useState('All');
    const [sortBy, setSortBy] = useState<'rank' | 'name' | 'score' | 'track' | 'status'>('score');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

    // Get available groups based on data + standard groups
    const availableTracks = Array.from(new Set(candidates.map(c => getGroupForTrack(c.track))));
    const distinctGroups = Array.from(new Set([...Object.keys(TRACK_GROUPS), ...availableTracks])).sort();
    const tracks = ['All', ...distinctGroups];

    // Sorting Helper
    const handleSort = (field: 'rank' | 'name' | 'score' | 'track' | 'status') => {
        if (sortBy === field) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(field);
            setSortOrder(field === 'rank' || field === 'name' ? 'asc' : 'desc');
        }
    };

    const SortIcon = ({ field }: { field: 'rank' | 'name' | 'score' | 'track' | 'status' }) => {
        if (sortBy !== field) return <span className="opacity-20 ml-1">⇅</span>;
        return <span className="ml-1 text-slate-800">{sortOrder === 'asc' ? '↑' : '↓'}</span>;
    };

    const filtered = candidates.filter(c => {
        const term = search.toLowerCase();
        const matchesSearch = c.name.toLowerCase().includes(term);

        let matchesTrack = true;
        if (trackFilter !== 'All') {
            const group = TRACK_GROUPS[trackFilter];
            if (group) {
                matchesTrack = group.includes(c.track) || c.track === trackFilter;
            } else {
                matchesTrack = c.track === trackFilter;
            }
        }

        return matchesSearch && matchesTrack;
    });

    const sorted = [...filtered].sort((a, b) => {
        if (sortBy === 'score') {
            return sortOrder === 'asc' ? a.averageScore - b.averageScore : b.averageScore - a.averageScore;
        }
        if (sortBy === 'name') {
            return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        }
        if (sortBy === 'track') {
            return sortOrder === 'asc' ? a.track.localeCompare(b.track) : b.track.localeCompare(a.track);
        }
        if (sortBy === 'status') {
            return sortOrder === 'asc' ? a.status.localeCompare(b.status) : b.status.localeCompare(a.status);
        }
        return 0;
    });

    // Special case for Rank: If sorting by score desc, use index as rank. 
    // Otherwise, we don't really have a "Rank" unless we compute it first.
    // For visual simplicity, we'll just show the index in the current sorted view as "Rank" if default sort,
    // or we can calculate rank based on global list. 
    // Let's stick to dynamic index for now, or just remove visual rank if sorted by name.

    return (
        <div className="space-y-6">
            <div className="flex gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search candidates..."
                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <select
                    className="px-4 py-2 border border-slate-200 rounded-lg bg-white"
                    value={trackFilter}
                    onChange={(e) => setTrackFilter(e.target.value)}
                >
                    {tracks.map(track => (
                        <option key={track} value={track}>
                            {track === 'All' ? 'All Departments' : track}
                        </option>
                    ))}
                </select>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-4 font-bold text-slate-700 w-16">Rank</th>
                            <th className="px-6 py-4 font-bold text-slate-700 cursor-pointer hover:bg-slate-100 select-none" onClick={() => handleSort('name')}>
                                Candidate <SortIcon field="name" />
                            </th>
                            <th className="px-6 py-4 font-bold text-slate-700 cursor-pointer hover:bg-slate-100 select-none" onClick={() => handleSort('track')}>
                                Track <SortIcon field="track" />
                            </th>
                            <th className="px-6 py-4 font-bold text-slate-700 text-center cursor-pointer hover:bg-slate-100 select-none" onClick={() => handleSort('score')}>
                                Score <SortIcon field="score" />
                            </th>
                            <th className="px-6 py-4 font-bold text-slate-700 cursor-pointer hover:bg-slate-100 select-none" onClick={() => handleSort('status')}>
                                Status <SortIcon field="status" />
                            </th>
                            <th className="px-6 py-4 font-bold text-slate-700">Tags</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {sorted.map((c, index) => (
                            <tr key={c.id} className="hover:bg-slate-50/50">
                                <td className="px-6 py-4 bg-slate-50/30 font-mono text-slate-400 font-semibold">
                                    {index + 1}
                                </td>
                                <td className="px-6 py-4 font-medium text-slate-900">{c.name}</td>
                                <td className="px-6 py-4 text-slate-600">{c.track}</td>
                                <td className="px-6 py-4 text-center">
                                    {c.averageScore > 0 ? (
                                        <span className={`inline-block px-3 py-1 rounded font-bold ${c.averageScore >= 60 ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'}`}>
                                            {c.averageScore}
                                        </span>
                                    ) : (
                                        <span className="text-slate-300">-</span>
                                    )}
                                </td>
                                <td className="px-6 py-4"><StatusBadge status={c.status} /></td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-wrap gap-1">
                                        {c.tags?.slice(0, 3).map(t => (
                                            <span key={t} className="text-[10px] uppercase px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded border border-slate-200">{t}</span>
                                        ))}
                                        {c.tags?.length > 3 && <span className="text-[10px] text-slate-400">+{c.tags.length - 3}</span>}
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {sorted.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                                    No candidates found for this filter.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
