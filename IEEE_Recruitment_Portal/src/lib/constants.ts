export const TRACK_GROUPS: Record<string, string[]> = {
    'Technical': ['Technical', 'Web', 'App', 'AI-ML', 'GameDev', 'CP', 'General'],
    'Creative': ['Creative', 'Design', 'Video', 'UI/UX'],
    'Management': ['Management', 'Publicity', 'Events', 'Logistics', 'Finance'],
    'Editorial': ['Editorial', 'Content'],
    'Social Media': ['Social Media', 'Social']
};

export const getGroupForTrack = (track: string) => {
    for (const [group, subtracks] of Object.entries(TRACK_GROUPS)) {
        if (subtracks.includes(track) || track === group) return group;
    }
    return track || 'General';
};
