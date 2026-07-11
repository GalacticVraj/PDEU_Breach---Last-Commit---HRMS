// ─────────────────────────────────────────────────────────
//  DEMO MODE  –  All API calls return realistic mock data
//  when VITE_DEMO_MODE=true in .env
// ─────────────────────────────────────────────────────────

const mockCandidates = [
  { id: 1, full_name: 'Aanya Sharma', avatar: 'A', current_role: 'Senior Frontend Engineer', company: 'Infosys', source: 'LinkedIn', status: 'Shortlisted', overall_score: 92, skills: ['React', 'TypeScript', 'Node.js', 'GraphQL'], location: 'Bangalore', experience: '5 yrs', email: 'aanya.s@demo.com', phone: '+91 98765 43210', ghost_status: false, lastActive: '1d ago', education: [{ degree: 'B.Tech Computer Science', school: 'IIT Bombay', year: 2019 }], timeline: [{ event: 'Resume Uploaded', date: 'Jun 2, 2025', type: 'default' }, { event: 'AI Screened – 92% Match', date: 'Jun 3, 2025', type: 'ai' }, { event: 'Shortlisted by HR', date: 'Jun 5, 2025', type: 'success' }], aiInsights: { summary: 'Aanya is an exceptional frontend engineer with deep React expertise. Her portfolio shows consistent delivery of scalable UIs and she scores high on communication and culture fit.', strengths: ['Expert-level React & TypeScript', 'Strong portfolio of production apps', 'Excellent communication history'], gaps: ['Limited backend exposure', 'No leadership role mentioned'], questions: ['Walk me through a complex state-management challenge you solved.', 'How do you approach performance optimization in React?', 'Describe a time you disagreed with a product decision.'], metrics: [{ name: 'Skills Match', value: 92, reason: 'Top React/TS skills match JD perfectly.' }, { name: 'Experience', value: 85, reason: '5 years relevant experience.' }, { name: 'Communication', value: 88, reason: 'Profile completeness & clarity.' }, { name: 'Leadership', value: 60, reason: 'No direct management exp.' }, { name: 'Culture Fit', value: 90, reason: 'Values align with company.' }, { name: 'Adaptability', value: 80, reason: 'Diverse tech stack history.' }] } },
  { id: 2, full_name: 'Rohan Mehta', avatar: 'R', current_role: 'Backend Engineer', company: 'TCS', source: 'Email', status: 'Interview', overall_score: 85, skills: ['Python', 'Django', 'PostgreSQL', 'Docker'], location: 'Pune', experience: '4 yrs', email: 'rohan.m@demo.com', phone: '+91 98765 11111', ghost_status: false, lastActive: '2d ago', education: [{ degree: 'M.Tech Software Engineering', school: 'NIT Pune', year: 2020 }], timeline: [{ event: 'Resume Uploaded', date: 'May 28, 2025', type: 'default' }, { event: 'AI Screened – 85% Match', date: 'May 29, 2025', type: 'ai' }, { event: 'Phone Screen Passed', date: 'Jun 1, 2025', type: 'success' }], aiInsights: { summary: 'Rohan has solid Python and Django skills. Strong DB design background. Culture fit looks great.', strengths: ['Deep Python ecosystem knowledge', 'Strong PostgreSQL indexing skills', 'Reliable delivery track record'], gaps: ['Limited cloud (AWS/GCP) exposure', 'Frontend skills absent'], questions: ['How do you design a highly concurrent API?', 'Explain your DB optimization approach.'], metrics: [{ name: 'Skills Match', value: 85 }, { name: 'Experience', value: 80 }, { name: 'Communication', value: 75 }, { name: 'Leadership', value: 55 }, { name: 'Culture Fit', value: 85 }, { name: 'Adaptability', value: 70 }] } },
  { id: 3, full_name: 'Priya Nair', avatar: 'P', current_role: 'Full Stack Developer', company: 'Wipro', source: 'LinkedIn', status: 'New', overall_score: 78, skills: ['Vue.js', 'Java', 'Spring Boot', 'MySQL'], location: 'Chennai', experience: '3 yrs', email: 'priya.n@demo.com', phone: '+91 98765 22222', ghost_status: false, lastActive: '5h ago', education: [{ degree: 'B.E. Information Technology', school: 'Anna University', year: 2021 }], timeline: [{ event: 'Resume Uploaded', date: 'Jun 8, 2025', type: 'default' }], aiInsights: { summary: 'Priya is a promising full-stack developer with a solid Java background.', strengths: ['Full-stack versatility', 'Strong academic record'], gaps: ['Less experience with modern JS frameworks'], questions: ['What is your preferred state management pattern?'], metrics: [{ name: 'Skills Match', value: 78 }, { name: 'Experience', value: 65 }, { name: 'Communication', value: 80 }, { name: 'Leadership', value: 45 }, { name: 'Culture Fit', value: 82 }, { name: 'Adaptability', value: 75 }] } },
  { id: 4, full_name: 'Dev Patel', avatar: 'D', current_role: 'DevOps Engineer', company: 'HCL', source: 'Referral', status: 'Offer', overall_score: 95, skills: ['Kubernetes', 'Terraform', 'AWS', 'CI/CD', 'Go'], location: 'Ahmedabad', experience: '7 yrs', email: 'dev.p@demo.com', phone: '+91 98765 33333', ghost_status: false, lastActive: '1d ago', education: [{ degree: 'B.Tech Computer Engineering', school: 'NIT Surat', year: 2017 }], timeline: [{ event: 'Referred by Neha K.', date: 'May 20, 2025', type: 'default' }, { event: 'AI Screened – 95% Match', date: 'May 21, 2025', type: 'ai' }, { event: 'Technical Round Cleared', date: 'Jun 1, 2025', type: 'success' }, { event: 'Offer Extended', date: 'Jun 7, 2025', type: 'success' }], aiInsights: { summary: 'Dev is a top-tier DevOps engineer. Highest scoring candidate this quarter.', strengths: ['Kubernetes at scale', 'IaC expertise (Terraform)', 'Multilingual (Go, Python, Bash)'], gaps: ['No experience with Azure'], questions: ['How do you handle cluster failures at 3 AM?'], metrics: [{ name: 'Skills Match', value: 95 }, { name: 'Experience', value: 92 }, { name: 'Communication', value: 88 }, { name: 'Leadership', value: 85 }, { name: 'Culture Fit', value: 90 }, { name: 'Adaptability', value: 93 }] } },
  { id: 5, full_name: 'Sneha Iyer', avatar: 'S', current_role: 'ML Engineer', company: 'Mindtree', source: 'LinkedIn', status: 'Screening', overall_score: 88, skills: ['Python', 'TensorFlow', 'PyTorch', 'MLOps', 'Spark'], location: 'Hyderabad', experience: '4 yrs', email: 'sneha.i@demo.com', phone: '+91 98765 44444', ghost_status: false, lastActive: '3h ago', education: [{ degree: 'M.Sc. Data Science', school: 'BITS Pilani', year: 2020 }], timeline: [{ event: 'Resume Uploaded', date: 'Jun 5, 2025', type: 'default' }, { event: 'AI Screened – 88% Match', date: 'Jun 6, 2025', type: 'ai' }], aiInsights: { summary: 'Sneha has exceptional ML skills with production MLOps experience.', strengths: ['End-to-end ML pipeline experience', 'Strong publications record'], gaps: ['Limited web API development'], questions: ['How do you handle data drift in production models?'], metrics: [{ name: 'Skills Match', value: 88 }, { name: 'Experience', value: 80 }, { name: 'Communication', value: 85 }, { name: 'Leadership', value: 60 }, { name: 'Culture Fit', value: 88 }, { name: 'Adaptability', value: 82 }] } },
  { id: 6, full_name: 'Vikram Singh', avatar: 'V', current_role: 'iOS Developer', company: 'Freelance', source: 'Email', status: 'Interviewing', overall_score: 74, skills: ['Swift', 'SwiftUI', 'CoreData', 'Xcode'], location: 'Delhi', experience: '6 yrs', email: 'vikram.s@demo.com', phone: '+91 98765 55555', ghost_status: true, lastActive: '5d ago', education: [{ degree: 'B.Sc. Computer Science', school: 'DU', year: 2018 }], timeline: [{ event: 'Resume Uploaded', date: 'May 15, 2025', type: 'default' }, { event: 'Interview Scheduled', date: 'May 22, 2025', type: 'default' }], aiInsights: { summary: 'Vikram has strong iOS skills but has been unresponsive for 5 days – ghost risk flagged.', strengths: ['Native iOS expertise', 'App Store publishing experience'], gaps: ['No cross-platform experience', 'Unresponsive to outreach'], questions: ['What is your approach to memory management in Swift?'], metrics: [{ name: 'Skills Match', value: 74 }, { name: 'Experience', value: 80 }, { name: 'Communication', value: 40 }, { name: 'Leadership', value: 50 }, { name: 'Culture Fit', value: 65 }, { name: 'Adaptability', value: 60 }] } },
  { id: 7, full_name: 'Kavya Reddy', avatar: 'K', current_role: 'Product Manager', company: 'Zoho', source: 'LinkedIn', status: 'Shortlisted', overall_score: 91, skills: ['Roadmapping', 'Agile', 'SQL', 'Figma', 'A/B Testing'], location: 'Bangalore', experience: '5 yrs', email: 'kavya.r@demo.com', phone: '+91 98765 66666', ghost_status: false, lastActive: '1d ago', education: [{ degree: 'MBA Product Management', school: 'IIM Bangalore', year: 2019 }], timeline: [{ event: 'Resume Uploaded', date: 'Jun 1, 2025', type: 'default' }, { event: 'AI Screened – 91% Match', date: 'Jun 2, 2025', type: 'ai' }, { event: 'Shortlisted', date: 'Jun 4, 2025', type: 'success' }], aiInsights: { summary: 'Kavya is an outstanding PM candidate from a top-tier institution with proven delivery.', strengths: ['Strong analytics background', 'Excellent stakeholder management', 'Data-driven decision making'], gaps: ['Limited technical depth'], questions: ['How do you prioritize features under constraints?'], metrics: [{ name: 'Skills Match', value: 91 }, { name: 'Experience', value: 88 }, { name: 'Communication', value: 95 }, { name: 'Leadership', value: 90 }, { name: 'Culture Fit', value: 92 }, { name: 'Adaptability', value: 85 }] } },
  { id: 8, full_name: 'Arjun Kapoor', avatar: 'A', current_role: 'Security Engineer', company: 'Paytm', source: 'Email', status: 'New', overall_score: 83, skills: ['Penetration Testing', 'SIEM', 'Python', 'Burp Suite'], location: 'Mumbai', experience: '4 yrs', email: 'arjun.k@demo.com', phone: '+91 98765 77777', ghost_status: false, lastActive: '2h ago', education: [{ degree: 'B.Tech Cybersecurity', school: 'VIT', year: 2020 }], timeline: [{ event: 'Resume Uploaded', date: 'Jun 9, 2025', type: 'default' }], aiInsights: { summary: 'Arjun brings solid security engineering skills with hands-on pen-testing experience.', strengths: ['Certified Ethical Hacker (CEH)', 'Bug bounty track record'], gaps: ['Limited cloud security experience'], questions: ['Describe a critical vulnerability you discovered and how you disclosed it.'], metrics: [{ name: 'Skills Match', value: 83 }, { name: 'Experience', value: 76 }, { name: 'Communication', value: 78 }, { name: 'Leadership', value: 55 }, { name: 'Culture Fit', value: 80 }, { name: 'Adaptability', value: 75 }] } },
];

const mockDashboardData = {
  stats: { totalCandidates: 1284, activeJobs: 12, totalApplications: 3421, hired: 47, inScreening: 312, inInterview: 189, offers: 28, appsTrend: '+14%', shortTrend: '+9%' },
  pipelineOverview: [
    { name: 'Applied', count: 1284, color: '#FF6B00' },
    { name: 'Screening', count: 312, color: '#FF8C42' },
    { name: 'Interview', count: 189, color: '#FFA366' },
    { name: 'Offer', count: 28, color: '#E55A00' },
    { name: 'Hired', count: 47, color: '#c44b00' },
  ],
  sourceDistribution: [
    { source: 'LinkedIn', count: 540 },
    { source: 'Email', count: 310 },
    { source: 'Referral', count: 210 },
    { source: 'Job Board', count: 150 },
    { source: 'Walk-in', count: 74 },
  ],
  skillsOverview: [
    { name: 'React', required: 40, available: 28 },
    { name: 'Python', required: 35, available: 30 },
    { name: 'DevOps', required: 20, available: 10 },
    { name: 'ML/AI', required: 25, available: 18 },
    { name: 'Java', required: 30, available: 22 },
  ],
  topCandidates: mockCandidates.filter(c => c.overall_score >= 85).slice(0, 5).map(c => ({
    id: c.id, full_name: c.full_name, source: c.source, skills: c.skills, overall_score: c.overall_score,
  })),
  weeklyTrends: [
    { week: 'Wk 1', applied: 120, screened: 80, interviewed: 30 },
    { week: 'Wk 2', applied: 180, screened: 110, interviewed: 45 },
    { week: 'Wk 3', applied: 220, screened: 140, interviewed: 60 },
    { week: 'Wk 4', applied: 190, screened: 130, interviewed: 55 },
  ],
  aiActivityFeed: [
    { time: '2m ago', text: '✦ AI shortlisted Aanya Sharma for Sr. Frontend role (92% match)' },
    { time: '15m ago', text: '✦ Ghost risk alert: Vikram Singh unresponsive for 5 days' },
    { time: '1h ago', text: '✦ Dev Patel accepted offer — DevOps position filled' },
    { time: '3h ago', text: '✦ Bulk upload processed: 47 new resumes from LinkedIn campaign' },
    { time: '5h ago', text: '✦ AI re-engagement sent to 12 passive pool candidates' },
    { time: '8h ago', text: '✦ Interview scheduled: Rohan Mehta — Backend Engineer panel' },
    { time: '1d ago', text: '✦ Duplicate profile detected and merged: 3 records' },
  ],
  upcomingInterviews: [
    { id: 1, name: 'Aanya Sharma', avatar: 'A', role: 'Sr. Frontend Engineer', time: '10:00 AM', type: 'Video', interviewer: 'Priyanka M.' },
    { id: 2, name: 'Rohan Mehta', avatar: 'R', role: 'Backend Engineer', time: '2:30 PM', type: 'Phone', interviewer: 'Kiran S.' },
    { id: 3, name: 'Sneha Iyer', avatar: 'S', role: 'ML Engineer', time: '4:00 PM', type: 'Video', interviewer: 'Dr. Arora' },
  ],
};

const mockJobs = [
  { id: 'job-1', title: 'Senior Frontend Engineer', department: 'Engineering', location: 'Bangalore', type: 'Full-time', pipeline: [
    { id: 'stage-1', name: 'Applied', candidates: mockCandidates.slice(0, 2).map(c => ({ ...c, stage_id: 'stage-1', days_in_stage: 2 })) },
    { id: 'stage-2', name: 'Screening', candidates: mockCandidates.slice(2, 4).map(c => ({ ...c, stage_id: 'stage-2', days_in_stage: 5 })) },
    { id: 'stage-3', name: 'Interview', candidates: mockCandidates.slice(4, 5).map(c => ({ ...c, stage_id: 'stage-3', days_in_stage: 3 })) },
    { id: 'stage-4', name: 'Offer', candidates: mockCandidates.slice(5, 6).map(c => ({ ...c, stage_id: 'stage-4', days_in_stage: 8 })) },
    { id: 'stage-5', name: 'Hired', candidates: [] },
    { id: 'stage-6', name: 'Rejected', candidates: [] },
  ]},
  { id: 'job-2', title: 'ML Engineer', department: 'AI Research', location: 'Hyderabad', type: 'Full-time', pipeline: [
    { id: 'stage-7', name: 'Applied', candidates: mockCandidates.slice(4, 6).map(c => ({ ...c, stage_id: 'stage-7', days_in_stage: 1 })) },
    { id: 'stage-8', name: 'Screening', candidates: [] },
    { id: 'stage-9', name: 'Interview', candidates: [] },
    { id: 'stage-10', name: 'Offer', candidates: [] },
    { id: 'stage-11', name: 'Hired', candidates: [] },
    { id: 'stage-12', name: 'Rejected', candidates: [] },
  ]},
];

const mockSources = {
  data: [
    { source: 'LinkedIn', count: 540, hired: 22, conversion: '4.1%', avgScore: 84 },
    { source: 'Email Campaign', count: 310, hired: 15, conversion: '4.8%', avgScore: 79 },
    { source: 'Referral', count: 210, hired: 8, conversion: '3.8%', avgScore: 91 },
    { source: 'Job Board', count: 150, hired: 2, conversion: '1.3%', avgScore: 72 },
    { source: 'Walk-in', count: 74, hired: 0, conversion: '0%', avgScore: 65 },
  ]
};

const mockEmailTemplate = (candidateId, type) => ({
  to: `candidate_${candidateId}@demo.com`,
  subject: type === 'offer' ? '🎉 Offer Letter – HireX Corp' : 'Next Steps for Your Application – HireX Corp',
  body: type === 'offer'
    ? `Dear Candidate,\n\nWe are delighted to extend an offer of employment for the position of Senior Engineer at HireX Corp.\n\nStart Date: July 21, 2025\nSalary: ₹24,00,000 per annum\n\nPlease confirm your acceptance by replying to this email.\n\nBest regards,\nHR Team, HireX Corp`
    : `Dear Candidate,\n\nThank you for your interest in HireX Corp. We were impressed by your profile and would like to move forward with your application.\n\nWe'd like to schedule a technical interview at your earliest convenience.\n\nBest regards,\nHR Team, HireX Corp`,
});

// ─── The main interceptor ────────────────────────────────
export function applyDemoInterceptors(axiosInstance) {
  axiosInstance.interceptors.request.use((config) => {
    config._demoStart = Date.now();
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => response, // pass through real responses (shouldn't happen in demo)
    async (error) => {
      const { config } = error;
      if (!config) return Promise.reject(error);

      const url = config.url || '';
      const method = (config.method || 'get').toLowerCase();

      // Simulate network latency
      await new Promise(r => setTimeout(r, 300 + Math.random() * 300));

      // ── AUTH ──
      if (url.includes('/auth/login')) {
        return { data: { token: 'demo.eyJ1c2VyIjp7ImlkIjoiZGVtbyIsIm5hbWUiOiJIUiBBZG1pbiIsImVtYWlsIjoiYWRtaW4uaHJAY29tcGFueW5hbWUuY29tIiwicm9sZSI6ImFkbWluIn0sImV4cCI6OTk5OTk5OTk5OX0.demo', user: { id: 'demo', name: 'HR Admin', email: 'admin.hr@companyname.com', role: 'admin' } } };
      }

      // ── DASHBOARD ──
      if (url.includes('/analytics/dashboard')) {
        return { data: { data: mockDashboardData } };
      }

      // ── CANDIDATES ──
      if (url.includes('/candidates/passive-pool')) {
        return { data: { data: mockCandidates.filter(c => c.ghost_status) } };
      }
      if (url.match(/\/candidates$/) || url.match(/\/candidates\?/)) {
        const params = config.params || {};
        let result = [...mockCandidates];
        if (params.search) {
          const q = params.search.toLowerCase();
          result = result.filter(c => c.full_name.toLowerCase().includes(q) || (c.skills || []).some(s => s.toLowerCase().includes(q)));
        }
        if (params.status) result = result.filter(c => c.status === params.status);
        if (params.ghost === 'true') result = result.filter(c => c.ghost_status);
        return { data: { data: result.map(c => ({ ...c, name: c.full_name, role: c.current_role, score: c.overall_score })), pagination: { total: result.length, page: 1, limit: 20 } } };
      }

      // ── JOBS ──
      if (url.match(/\/jobs\/([^/]+)$/) && method === 'get') {
        const jobId = url.split('/').pop();
        const job = mockJobs.find(j => j.id === jobId) || mockJobs[0];
        return { data: { data: job } };
      }
      if (url.includes('/applications/') && url.includes('/move')) {
        return { data: { success: true } };
      }
      if (url.includes('/jobs')) {
        return { data: { data: mockJobs } };
      }

      // ── EMAIL TEMPLATE ──
      if (url.includes('/company/email-compose/')) {
        const parts = url.split('/');
        const candidateId = parts[parts.length - 1];
        const type = config.params?.type || 'outreach';
        return { data: { data: mockEmailTemplate(candidateId, type) } };
      }

      // ── PASSIVE POOL MUTATIONS ──
      if (url.includes('/passive-pool')) {
        return { data: { success: true } };
      }

      // ── AI CHAT ──
      if (url.includes('/chat')) {
        return {
          data: {
            reply: "⚠️ **Backend Not Connected**\n\nThis is a demo of HireX. The AI assistant is currently running in demo mode — the backend server is offline.\n\n**What you can do:**\n• Browse the Candidate Database\n• View the Hiring Pipeline\n• Explore the Dashboard analytics\n• Check Source Analytics\n\nAll data shown is realistic demo data. The full AI chat feature requires the backend to be connected."
          }
        };
      }

      // ── AI SEARCH ──
      if (url.includes('/chat')) {
        return {
          data: {
            reply: "⚠️ **Backend Not Connected**\n\nThis is a demo of HireX. The AI assistant is currently running in demo mode — the backend server is offline.\n\n**What you can do:**\n• Browse the Candidate Database\n• View the Hiring Pipeline\n• Explore the Dashboard analytics\n• Check Source Analytics\n\nAll data shown is realistic demo data. The full AI chat feature requires the backend to be connected."
          }
        };
      }

      if (url.includes('/search/natural') || url.includes('/linkedin/search') || url.includes('/ai-search') || url.includes('/candidates/semantic-search')) {
        return { data: { data: mockCandidates.slice(0, 4).map(c => ({ ...c, name: c.full_name, score: c.overall_score })) } };
      }

      if (url.includes('/hire-by-friday')) {
        return { data: { success: true, message: 'Hire By Friday workflow initiated (Demo).' } };
      }

      if (url.includes('/company/generate-offer-pdf')) {
        // Return a dummy pdf blob
        const pdfBlob = new Blob(['%PDF-1.4\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R >>\nendobj\n4 0 obj\n<< /Length 51 >>\nstream\nBT\n/F1 12 Tf\n72 712 Td\n(Demo Offer Letter PDF) Tj\nET\nendstream\nendobj\nxref\n0 5\n0000000000 65535 f \n0000000009 00000 n \n0000000058 00000 n \n0000000115 00000 n \n0000000219 00000 n \ntrailer\n<< /Size 5 /Root 1 0 R >>\nstartxref\n320\n%%EOF'], { type: 'application/pdf' });
        return { data: pdfBlob };
      }

      // ── INTERVIEW PANEL ──
      if (url.includes('/candidates/questions')) {
        return { data: { data: [{ id: 1, text: 'Tell me about your experience with React.' }, { id: 2, text: 'How do you handle state management?' }] } };
      }
      
      if (url.match(/\/candidates\/([^/]+)$/) && method === 'get') {
        const candId = url.split('/').pop();
        const cand = mockCandidates.find(c => c.id == candId) || mockCandidates[0];
        return { data: { data: cand } };
      }

      if (url.includes('/candidates/parse-resume')) {
        return { data: { data: { name: 'New Candidate', email: 'new@demo.com', phone: '1234567890', skills: ['React', 'JavaScript'] } } };
      }

      // ── SETTINGS / MISC ──
      if (method === 'put' || method === 'post' || method === 'delete') {
        return { data: { success: true, message: 'Demo mode: changes are not persisted.' } };
      }

      // Fallback
      return { data: { data: [], success: true } };
    }
  );
}
