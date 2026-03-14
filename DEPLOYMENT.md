# 🚀 HireX Deployment Guide (Vercel + Railway)

This project is optimized for a split deployment. The **Frontend** runs on Vercel's Edge network, while the **Backend** runs on Railway's persistent infrastructure (required for AI models and PDF generation).

---

## 🏗 Part 1: Backend Deployment (Railway)

Railway is used for the Node.js server because it handles persistent storage (`data.json`) and the heavy local AI models (`@xenova/transformers`).

1.  **Create a New Service**: On [Railway.app](https://railway.app/), create a new project.
2.  **Connect GitHub**: Select your `PDEU_Breach---Last-Commit---HRMS` repository.
3.  **Set Root Directory**: In the Railway settings for this service, set the **Root Directory** to `server`.
4.  **Environment Variables**: Add these in the "Variables" tab:
    -   `PORT`: `3001` (Railway usually provides this automatically).
    -   `GROQ_API_KEY`: Get one from [Groq Console](https://console.groq.com/).
    -   `JWT_SECRET`: Any random string (e.g., `talentos-super-secret-key`).
    -   `NODE_ENV`: `production`

---

## 🌐 Part 2: Frontend Deployment (Vercel)

Vercel is the best home for the React + Vite frontend.

1.  **New Project**: Go to [Vercel](https://vercel.com/new).
2.  **Import Repo**: Select your `PDEU_Breach---Last-Commit---HRMS` repository.
3.  **Root Directory**: Set this to `client`.
4.  **Build Settings**:
    -   **Framework Preset**: Vite
    -   **Build Command**: `npm run build`
    -   **Output Directory**: `dist`
5.  **Environment Variables**:
    -   `VITE_API_BASE_URL`: The URL provided by Railway (e.g., `https://your-service-production.up.railway.app/api/v1`).
6.  **Deploy**: Click Deploy! 🚀

---

## 🧠 Note on AI Engine

Instead of FAISS (which requires a heavy C++ environment), HireX uses **@xenova/transformers**. 
- It runs the **all-MiniLM-L6-v2** model directly in Node.js.
- It performs conceptual "Semantic Search" on your candidates.
- It calculates vector similarity scores in real-time.
- **Why?** It's significantly faster for JS environments and doesn't require a separate vector database for this hackathon scale.

---

## 📊 Database Persistence

The app currently uses a local `data.json`. 
- **Persistence**: On Railway, changes to `data.json` will persist between restarts but will be **wiped on a fresh code deploy**.
- **Seed**: If the database ever becomes empty, the server automatically re-seeds with 50 high-quality candidates on the next startup.
- **For True Persistence**: Connect a **PostgreSQL** database by updating `server/database.js` if you choose to go beyond the hackathon stage.

---

**Built by GalaticticVraj for PDEU Breach Hackathon**
