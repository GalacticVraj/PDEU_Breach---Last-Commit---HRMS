const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(process.cwd(), 'db.json');

const NEW_USERS = [
    { name: 'Technical Team', email: 'technical@ieee.org', role: 'Interviewer', departmentId: 'technical' },
    { name: 'Design Team', email: 'design@ieee.org', role: 'Interviewer', departmentId: 'design' },
    { name: 'Marketing Team', email: 'marketing@ieee.org', role: 'Interviewer', departmentId: 'marketing' },
    { name: 'Editorial Team', email: 'editorial@ieee.org', role: 'Interviewer', departmentId: 'editorial' },
    { name: 'Social Media Team', email: 'social@ieee.org', role: 'Interviewer', departmentId: 'social' },
    { name: 'Management Team', email: 'management@ieee.org', role: 'Interviewer', departmentId: 'management' }
];

try {
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    const db = JSON.parse(data);

    if (!db.users) {
        console.log('Users array missing. Creating it...');
        db.users = [];
    }

    // Ensure Admin exists
    if (!db.users.find(u => u.email === 'admin@ieee.org')) {
        db.users.push({
            id: 'admin',
            name: 'Super Admin',
            email: 'admin@ieee.org',
            passwordHash: 'admin123',
            role: 'SuperAdmin'
        });
        console.log('Added Admin user.');
    }

    // Add new users
    NEW_USERS.forEach(newUser => {
        if (!db.users.find(u => u.email === newUser.email)) {
            db.users.push({
                id: newUser.departmentId,
                ...newUser,
                passwordHash: 'admin123' // Default password
            });
            console.log(`Added user: ${newUser.name}`);
        } else {
            console.log(`User already exists: ${newUser.name}`);
        }
    });

    fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
    console.log('Database updated successfully.');

} catch (err) {
    console.error('Error updating DB:', err);
}
