# How to Deploy to Vercel 🚀

The project is now fully configured for **MongoDB Cloud** and ready for Vercel.

### Option 1: Vercel CLI (Fastest & Easiest)
1.  **Open Terminal**: Open this folder in VS Code.
2.  **Install Vercel**: Run:
    ```bash
    npm i -g vercel
    ```
3.  **Login**: Run:
    ```bash
    vercel login
    ```
4.  **Deploy**: Run:
    ```bash
    vercel
    ```
    -   Type `Y` to "Set up and deploy?".
    -   Select your personal scope.
    -   "Link to existing project?": `N`.
    -   "Project Name": `ieee-recruitment`.
    -   "In which directory?": Just press Enter (`./`).
    -   **IMPORTANT**: When it asks **"Want to modify these settings?"** -> say `Y`.
    -   It will ask for **Environment Variables**:
        -   Variable Name: `MONGODB_URI`
        -   Variable Value: `mongodb+srv://24btm032_db_user:admin123@cluster0.hkrpnsp.mongodb.net/?appName=Cluster0`
    -   Then deploy.

### Option 2: Deploy via GitHub
1.  Push this code to a new [GitHub Repository](https://github.com/new).
2.  Go to [Vercel.com](https://vercel.com) -> **Add New Project**.
3.  Import your repository.
4.  In the **Environment Variables** section (before clicking Deploy), add:
    -   **Key**: `MONGODB_URI`
    -   **Value**: `mongodb+srv://24btm032_db_user:admin123@cluster0.hkrpnsp.mongodb.net/?appName=Cluster0`
5.  Click **Deploy**.

---
### 🎉 Done!
Your website will be live at `https://ieee-recruitment.vercel.app` (or similar).

---
### 🔄 How to Update the Live Site
Whenever you make code changes (like changing text, colors, or logic):
1.  Save your files in VS Code.
2.  Open your terminal.
3.  Run:
    ```bash
    vercel --prod
    ```
4.  It will upload the changes and update the website in about 1 minute.
