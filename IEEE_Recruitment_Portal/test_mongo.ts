import mongoose from 'mongoose';

const URI = 'mongodb+srv://24btm032_db_user:admin123@cluster0.hkrpnsp.mongodb.net/?appName=Cluster0';

async function test() {
    try {
        console.log("Connecting...");
        await mongoose.connect(URI);
        console.log("Connected successfully!");
        await mongoose.disconnect();
    } catch (e) {
        console.error("Connection failed:", e);
    }
}

test();
