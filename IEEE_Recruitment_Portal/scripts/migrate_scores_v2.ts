import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'db.json');

interface ScoreSheet {
    domainSkill?: number;
    communication: number;
    experience?: number;
    problemSolving?: number;
    dedication?: number;

    technical?: number;
    leadership?: number;
    teamwork?: number;
    initiative?: number;

    total: number;
    finalRating?: number;
    [key: string]: any;
}

interface Candidate {
    id: string;
    name: string;
    scores: {
        interviewer1: ScoreSheet | null;
        interviewer2: ScoreSheet | null;
    };
    averageScore: number;
    finalRatingAverage: number;
    [key: string]: any;
}

interface DB {
    candidates: Candidate[];
    [key: string]: any;
}

function migrate() {
    if (!fs.existsSync(DB_PATH)) {
        console.error('db.json not found!');
        process.exit(1);
    }

    const db: DB = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
    let updatedCount = 0;

    db.candidates = db.candidates.map(candidate => {
        let changed = false;

        (['interviewer1', 'interviewer2'] as const).forEach(role => {
            const score = candidate.scores[role];
            if (score) {
                // Check if already migrated (e.g. domainSkill exists)
                if (score.domainSkill === undefined) {
                    console.log(`Migrating ${candidate.name} - ${role}...`);

                    // Maps
                    const technical = score.technical || 0;
                    const leadership = score.leadership || 0;
                    const teamwork = score.teamwork || 0;
                    const initiative = score.initiative || 0;
                    const communication = score.communication || 0;

                    // Convert (Scale 10 -> Scale 2)
                    score.domainSkill = parseFloat((technical / 5).toFixed(1));
                    score.experience = parseFloat((teamwork / 5).toFixed(1)); // Best effort map
                    score.problemSolving = parseFloat((leadership / 5).toFixed(1)); // Best effort map
                    score.dedication = parseFloat((initiative / 5).toFixed(1)); // Best effort map

                    // Communication might already be small if they re-scored, but assume legacy is large
                    score.communication = communication > 2 ? parseFloat((communication / 5).toFixed(1)) : communication;

                    // Recalculate Total
                    score.total = parseFloat((
                        score.domainSkill +
                        score.communication +
                        score.experience +
                        score.problemSolving +
                        score.dedication
                    ).toFixed(1));

                    score.finalRating = score.total;

                    changed = true;
                }
            }
        });

        if (changed) {
            // Recalculate averages
            const s1 = candidate.scores.interviewer1;
            const s2 = candidate.scores.interviewer2;
            let sum = 0;
            let count = 0;

            if (s1) { sum += s1.total; count++; }
            if (s2) { sum += s2.total; count++; }

            const avg = count > 0 ? parseFloat((sum / count).toFixed(1)) : 0;

            // Average Score and Final Rating Average are now on 10 scale
            candidate.averageScore = avg; // was /50
            candidate.finalRatingAverage = avg; // /10

            updatedCount++;
        }

        return candidate;
    });

    if (updatedCount > 0) {
        fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
        console.log(`Successfully migrated ${updatedCount} candidates.`);
    } else {
        console.log('No candidates needed migration.');
    }
}

migrate();
