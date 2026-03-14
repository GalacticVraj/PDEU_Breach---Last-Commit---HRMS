const http = require('http');

const urls = [
    'http://localhost:3005/candidates/p9wry57u0/edit',
    'http://localhost:3005/candidates/add',
    'http://localhost:3005/members/add',
    'http://localhost:3005/qbank/edit',
    'http://localhost:3005/settings/departments'
];

async function check(url) {
    return new Promise((resolve) => {
        http.get(url, (res) => {
            console.log(`${url} -> Status: ${res.statusCode}`);
            // Consume response to free memory
            res.resume();
            resolve();
        }).on('error', (e) => {
            console.log(`${url} -> Error: ${e.message}`);
            resolve();
        });
    });
}

(async () => {
    console.log("Starting Verification...");
    for (const u of urls) await check(u);
    console.log("Verification Complete.");
})();
