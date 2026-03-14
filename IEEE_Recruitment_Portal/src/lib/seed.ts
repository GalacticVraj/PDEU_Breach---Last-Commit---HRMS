import fs from 'fs/promises';
import path from 'path';
import { DB, User, Department } from './types';

const DB_PATH = path.join(process.cwd(), 'db.json');

const INITIAL_DEPARTMENTS: Department[] = [
    { id: 'dept_tech', name: 'Technical' },
    { id: 'dept_creative', name: 'Creative' },
    { id: 'dept_editorial', name: 'Editorial & Content' },
    { id: 'dept_social', name: 'Social Media' },
    { id: 'dept_membership', name: 'Membership Development' },
    { id: 'dept_outreach', name: 'Student Outreach' }
];

const INITIAL_ADMIN: User = {
    id: 'user_admin',
    name: 'Super Admin',
    email: 'admin@ieee.org',
    role: 'SuperAdmin',
    passwordHash: 'admin123' // Plaintext for prototype simplicity
};

async function seed() {
    try {
        let db: DB;
        try {
            const data = await fs.readFile(DB_PATH, 'utf-8');
            const parsed = JSON.parse(data);
            // Ensure compatibility with new structure
            db = {
                candidates: Array.isArray(parsed.candidates) ? parsed.candidates : [],
                users: Array.isArray(parsed.users) ? parsed.users : [],
                departments: Array.isArray(parsed.departments) ? parsed.departments : [],
                members: Array.isArray(parsed.members) ? parsed.members : []
            };
        } catch (e) {
            console.log('No existing DB found or invalid, starting fresh.');
            db = { candidates: [], users: [], departments: [], members: [] };
        }

        // Seed Departments if empty
        if (db.departments.length === 0) {
            console.log('Seeding Departments...');
            db.departments = INITIAL_DEPARTMENTS;
        }

        // Seed Admin if no users
        if (db.users.length === 0) {
            console.log('Seeding Super Admin...');
            db.users = [INITIAL_ADMIN];
        }

        await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Seeding failed:', error);
    }
}

seed();
