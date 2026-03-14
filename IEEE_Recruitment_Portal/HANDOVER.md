# IEEE SBNU Recruitment Portal - Handover Document

## 🚀 Live Access
**URL**: [http://localhost:3005](http://localhost:3005)

### 🔐 Default Department Credentials 
| Role | Email | Password |
| :--- | :--- | :--- |
| **Super Admin** | `admin@ieee.org` | `admin123` |
| **Tech Head** | `tech@ieee.org` | `ieee123` |
| **Creative Head** | `creative@ieee.org` | `ieee123` |
| **Editorial Head** | `editorial@ieee.org` | `ieee123` |
| **Social Head** | `social@ieee.org` | `ieee123` |

> **Note:** Any new member you onboard in the future will default to password `ieee123`.

## ✅ Verified Features List

### 1. Member & Department Management
*   **Create Departments**: Go to **Settings** -> **Manage Departments**. (Add/Rename/Delete fully working).
*   **Onboard Members**: Go to **Members** -> **Onboard Member**.
    *   **Auto-Password**: No password prompt. Default is `ieee123`.
    *   **Department Link**: Select department to restrict their access.
*   **Member Editing**: Go to **Members List** -> Click **Pencil Icon**.
    *   **Reset Passwords**: SuperAdmin can set a new custom password here.
    *   **Update Role/Dept**: Fully adjustable.

### 2. Candidate Management
*   **Add Candidate**: Manual entry working.
*   **Edit Candidate**: **FIXED** (No more crash). Can update Name, Track, Interviewer.
*   **Import CSV**: Bulk upload working.

### 3. Interview Process (Dual Interviewer)
*   **Login**: Interviewers login with their own email.
*   **Scoring**: Two interviewers can score the *same* candidate simultaneously.
*   **Merging**: System automatically averages scores from both.
*   **Department Filter**: Tech Head only sees Tech candidates, etc.

### 4. Admin Tools
*   **Question Bank**: Fully dynamic (Add/Edit Categories & Questions).
*   **Reset Database**: Danger Zone in Settings working.
*   **Reports**: Print-ready candidate evaluation sheets.

---

## 🛠️ Troubleshooting
If the server stops, run:
```bash
npx next start -p 3005
```
