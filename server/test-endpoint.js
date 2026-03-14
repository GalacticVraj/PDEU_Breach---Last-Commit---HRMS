// Use global fetch

async function test() {
  const res = await fetch('http://localhost:3001/api/v1/candidates/parse-resume', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer dummy' // The middleware is loose locally or maybe I should check it
    },
    body: JSON.stringify({ resumeText: 'John Doe, Software Engineer at Google. Skills: React, Node.js' })
  });
  const json = await res.json();
  console.log('Status:', res.status);
  console.log('Response:', JSON.stringify(json, null, 2));
}

test();
