import mongoose from 'mongoose';
import { UserModel } from './src/models/models';

const URI = 'mongodb+srv://24btm032_db_user:admin123@cluster0.hkrpnsp.mongodb.net/?appName=Cluster0';

const FINAL_USERS = [
    { name: 'Technical Team', email: 'technical@ieee.org', role: 'Interviewer', departmentId: 'technical' },
    { name: 'Design Team', email: 'design@ieee.org', role: 'Interviewer', departmentId: 'design' },
    { name: 'Marketing Team', email: 'marketing@ieee.org', role: 'Interviewer', departmentId: 'marketing' },
    { name: 'Editorial Team', email: 'editorial@ieee.org', role: 'Interviewer', departmentId: 'editorial' },
    { name: 'Social Media Team', email: 'social@ieee.org', role: 'Interviewer', departmentId: 'social' },
    { name: 'Management Team', email: 'management@ieee.org', role: 'Interviewer', departmentId: 'management' },
    { name: 'Super Admin', email: 'admin@ieee.org', role: 'SuperAdmin', id: 'admin' }
];

async function updateUsers() {
    try {
        console.log("Connecting do DB...");
        await mongoose.connect(URI);
        console.log("Connected.");

        // Clear existing users
        console.log("Clearing existing users...");
        await UserModel.deleteMany({});

        // Prepare users with password and ID
        const usersToInsert = FINAL_USERS.map(u => ({
            id: u.id || u.departmentId,
            name: u.name,
            email: u.email,
            role: u.role,
            departmentId: u.departmentId,
            passwordHash: 'admin123' // Setting final password
        }));

        console.log(`Inserting ${usersToInsert.length} users...`);
        await UserModel.insertMany(usersToInsert);

        console.log("✅ Users updated successfully in Production Database.");

        await mongoose.disconnect();
    } catch (e) {
        console.error("Failed to update users:", e);
    }
}

updateUsers();
