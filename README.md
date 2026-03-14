# 🚀 HireX - The AI-Powered Unified Recruitment Platform

**HireX** (formerly TalentOS) is a premium, blazing-fast, and deeply intelligent recruitment platform built for modern HR teams. Winning design aesthetics combined with powerful AI integrations (Groq/Anthropic) makes evaluating candidates seamless.

---

## 🏗 Architecture

```text
CLIENT (Vite + React)                       SERVER (Express.js)                        DATA & JOBS
-----------------------                      ---------------------                      ----------------
   [ Dashboard ]             REST / JSON        [ search.js ]   ---> Local Transformers  [ JSON DB ]
   [ Candidates ]   <=======================>   [ candidates.js]                         with Embeddings
   [ AI Search ]             (Axios)            [ resumeGen.js ]
   [ Pipeline  ]                                                                         [ data.json ]
   [ Sources   ]                                [ aiSimulator.js ]                       local storage
```

---

## 💻 Tech Stack

- **Frontend**: React 19, Vite, TailwindCSS v4, Recharts, Lucide Icons, `@dnd-kit/core`.
- **Backend**: Node.js 20+, Express, `@xenova/transformers`, `puppeteer`, `sharp`.

---

## 🚀 Native Setup (Recommended)

To run the platform natively on your machine:

### 1. Backend Setup
```bash
cd server
npm install
npm run dev
```
*Backend runs at: [http://localhost:3001](http://localhost:3001)*

### 2. Frontend Setup
```bash
cd client
npm install
npm run dev
```
*Frontend runs at: [http://localhost:5173](http://localhost:5173)*

---

## 🔑 AI Features Initialization

To enable Semantic Search on your local data:
1. Ensure the server is running.
2. Trigger the local indexing:
   ```bash
   curl -X POST http://localhost:5000/api/v1/candidates/index
   ```
This will generate embeddings using the local transformer model and save them to `data.json`.

---

## 🛠 Troubleshooting

- **Sharp Module Error**: If the backend crashes with a "sharp" error, run `npm install sharp` in the `/server` directory. This is required for the `@xenova/transformers` library to function on Windows/Linux environments.
- **Port Conflicts**: Ensure ports `3000` and `5000` are free.

---

**Built with ✨ for the Hackathon.**
