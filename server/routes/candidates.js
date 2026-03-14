const express = require('express');
const router = express.Router();
const { getDb } = require('../database');
const { v4: uuidv4 } = require('uuid');
const aiSimulator = require('../utils/aiSimulator');

function getLastActiveString(candidateId, db) {
  const logs = (db.data.activity_log || []).filter(a => a.candidate_id === candidateId);
  if (!logs.length) return null;
  const sorted = logs.sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''));
  const latest = new Date(sorted[0].created_at);
  const now = new Date();
  const diffMs = now - latest;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return '1d ago';
  return `${diffDays}d ago`;
}

function buildFrontendCandidate(c, db) {
  const skills = (db.data.candidate_skills || []).filter(s => s.candidate_id === c.id).map(s => s.skill_name);
  const education = (db.data.education || []).filter(e => e.candidate_id === c.id).map(e => ({ degree: e.degree, school: e.institution, year: e.end_year }));
  const timeline = (db.data.activity_log || [])
    .filter(a => a.candidate_id === c.id)
    .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''))
    .slice(0, 5)
    .map(a => ({
      date: new Date(a.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      event: a.action,
      type: a.action.toLowerCase().includes('ai') ? 'ai' : 'action'
    }));

  const scoreData = aiSimulator.simulateCandidateScoring(c, c.summary || '');
  const statusMap = { Active: 'New', Hired: 'Hired', Rejected: 'Rejected' };
  const status = statusMap[c.status] || c.status || 'New';

  const lastActive = getLastActiveString(c.id, db);

  // Ghost detection: flagged in DB OR (in Interview/Offer + inactive > 3 days)
  let ghostStatus = c.ghost_status || 0;
  if (!ghostStatus && (c.status === 'Interviewing' || c.status === 'Offer') && lastActive) {
    const daysMatch = lastActive.match(/^(\d+)d ago$/);
    if (daysMatch && parseInt(daysMatch[1]) >= 3) ghostStatus = 1;
  }

  // Build 6-axis radar scores
  const radarRow = (db.data.talent_radar_scores || []).find(r => r.candidate_id === c.id);
  const expYears = c.years_of_experience || 0;
  const metrics = [
    { 
      name: 'Skills Match', 
      value: radarRow ? radarRow.skills_match : (c.overall_score || scoreData.overall_score), 
      reason: 'Technical skill overlap with the job requirements.'
    },
    { 
      name: 'Experience', 
      value: radarRow ? radarRow.experience : Math.min(100, expYears * 10 + 20), 
      reason: 'Seniority and depth of relevant industry experience.'
    },
    { 
      name: 'Communication', 
      value: radarRow ? radarRow.communication : Math.min(100, 60 + Math.floor(Math.random() * 25 + 10)), 
      reason: 'Based on profile completeness and response history.'
    },
    { 
      name: 'Leadership', 
      value: radarRow ? radarRow.leadership : Math.min(100, 40 + expYears * 5), 
      reason: 'Management and mentoring signals from resume.'
    },
    { 
      name: 'Culture Fit', 
      value: radarRow ? radarRow.culture_fit : Math.min(100, 70 + Math.floor(Math.random() * 20)), 
      reason: 'Alignment with stated company values and team culture.'
    },
    { 
      name: 'Adaptability', 
      value: radarRow ? radarRow.adaptability : Math.min(100, 55 + Math.floor(Math.random() * 30)), 
      reason: 'Career trajectory diversity and tech stack breadth.'
    },
  ];

  return {
    id: c.id,
    name: c.full_name,
    role: c.current_role,
    company: c.current_company,
    email: c.email,
    phone: c.phone,
    avatar: c.avatar_url ? c.avatar_url.charAt(0) : (c.full_name ? c.full_name.charAt(0) : 'U'),
    source: c.source,
    experience: `${expYears} yrs`,
    score: c.overall_score || scoreData.overall_score,
    location: c.location,
    status,
    ghostStatus,
    lastActive,
    ghost_status: ghostStatus,
    skills,
    education,
    timeline,
    aiInsights: {
      strengths: ['Strong communication and collaboration skills.', 'Consistent delivery of high-quality work.', 'Fast learner with growth mindset.'],
      gaps: ['Limited experience with large distributed systems.', 'Needs more backend/DevOps exposure.'],
      summary: scoreData.explanation,
      questions: [
        'Describe a complex problem you solved recently.',
        'How do you stay up to date with new technology?',
        'How do you balance speed vs quality in delivery?'
      ],
      cultureFit: 'Highly collaborative and growth-oriented.',
      metrics
    }
  };
}

// GET /candidates — list with filters
router.get('/', (req, res) => {
  try {
    const db = getDb();
    const { search, seniority, source, status, skill, sort_by, sort_order, page = 1, limit = 20, location, ghost } = req.query;
    let items = db.data.candidates || [];

    if (search) { const s = search.toLowerCase(); items = items.filter(c => (c.full_name||'').toLowerCase().includes(s) || (c.email||'').toLowerCase().includes(s) || (c.current_role||'').toLowerCase().includes(s) || (c.current_company||'').toLowerCase().includes(s)); }
    if (seniority) items = items.filter(c => c.seniority_level === seniority);
    if (source) items = items.filter(c => c.source === source);
    if (location) { const l = location.toLowerCase(); items = items.filter(c => (c.location||'').toLowerCase().includes(l)); }
    if (skill) { const sk = skill.toLowerCase(); const cids = new Set(db.data.candidate_skills.filter(s => s.skill_name.toLowerCase().includes(sk)).map(s => s.candidate_id)); items = items.filter(c => cids.has(c.id)); }

    // Ghost filter: flag by DB field OR by stage + inactivity
    if (ghost === 'true') {
      items = items.filter(c => {
        if (c.ghost_status) return true;
        const ghostableStage = c.status === 'Interviewing' || c.status === 'Offer';
        if (!ghostableStage) return false;
        const logs = (db.data.activity_log || []).filter(a => a.candidate_id === c.id);
        if (!logs.length) return ghostableStage;
        const latest = logs.sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''))[0];
        const diffDays = Math.floor((new Date() - new Date(latest.created_at)) / (1000 * 60 * 60 * 24));
        return diffDays >= 3;
      });
    } else if (status) {
      items = items.filter(c => c.status === status);
    }

    const validSorts = ['full_name','created_at','overall_score','years_of_experience'];
    const sf = validSorts.includes(sort_by) ? sort_by : 'created_at';
    const dir = sort_order === 'asc' ? 1 : -1;
    items.sort((a, b) => { const va = a[sf] || ''; const vb = b[sf] || ''; return typeof va === 'number' ? (va - vb) * dir : String(va).localeCompare(String(vb)) * dir; });

    const total = items.length;
    const p = parseInt(page), l = parseInt(limit);
    const paged = items.slice((p - 1) * l, p * l);

    const enriched = paged.map(c => buildFrontendCandidate(c, db));

    res.json({ data: enriched, pagination: { total, page: p, limit: l, pages: Math.ceil(total / l) } });
  } catch (err) { res.status(500).json({ error: { message: err.message } }); }
});

// GET /candidates/passive-pool
router.get('/passive-pool', (req, res) => {
  try {
    const db = getDb();
    const pool = (db.data.passive_pool || []);
    const enriched = pool.map(p => {
      const c = db.data.candidates.find(x => x.id === p.candidate_id);
      if (!c) return null;
      return {
        id: c.id,
        name: c.full_name,
        role: c.current_role,
        score: c.overall_score || 70,
        reason: p.reason || 'Added to passive talent pool for future opportunities.',
        addedAt: p.added_at,
      };
    }).filter(Boolean);
    res.json({ data: enriched });
  } catch (err) { res.status(500).json({ error: { message: err.message } }); }
});

// GET /candidates/compare/multi
router.get('/compare/multi', (req, res) => {
  try {
    const db = getDb();
    const ids = (req.query.ids || '').split(',').filter(Boolean);
    const candidates = ids.map(id => {
      const c = db.data.candidates.find(x => x.id === id);
      if (!c) return null;
      return { ...c, skills: db.data.candidate_skills.filter(s => s.candidate_id === id), work_experience: db.data.work_experience.filter(w => w.candidate_id === id), education: db.data.education.filter(e => e.candidate_id === id), radar_scores: db.data.talent_radar_scores.find(r => r.candidate_id === id) };
    }).filter(Boolean);
    res.json({ data: candidates });
  } catch (err) { res.status(500).json({ error: { message: err.message } }); }
});

// GET /candidates/:id
router.get('/:id', (req, res) => {
  try {
    const db = getDb();
    const c = db.data.candidates.find(x => x.id === req.params.id);
    if (!c) return res.status(404).json({ error: { message: 'Candidate not found' } });
    const base = buildFrontendCandidate(c, db);
    const result = {
      ...base,
      work_experience: (db.data.work_experience||[]).filter(w => w.candidate_id === c.id).sort((a,b) => (b.start_date||'').localeCompare(a.start_date||'')),
      certifications: (db.data.certifications||[]).filter(x => x.candidate_id === c.id),
      notes: (db.data.notes||[]).filter(n => n.candidate_id === c.id).sort((a,b) => (b.created_at||'').localeCompare(a.created_at||'')),
      activity_log: (db.data.activity_log||[]).filter(a => a.candidate_id === c.id).sort((a,b) => (b.created_at||'').localeCompare(a.created_at||'')).slice(0,50),
      applications: (db.data.applications||[]).filter(a => a.candidate_id === c.id).map(a => { const j = db.data.jobs.find(j => j.id === a.job_id); const ps = db.data.pipeline_stages.find(s => s.id === a.stage_id); return { ...a, job_title: j?.title, stage_name: ps?.name }; }),
      radar_scores: (db.data.talent_radar_scores||[]).find(r => r.candidate_id === c.id),
      email_threads: (db.data.email_threads||[]).filter(e => e.candidate_id === c.id),
    };
    res.json({ data: result });
  } catch (err) { res.status(500).json({ error: { message: err.message } }); }
});

// POST /candidates
router.post('/', (req, res) => {
  try {
    const db = getDb();
    const id = uuidv4();
    const { full_name, email, phone, location, linkedin_url, github_url, portfolio_url, summary, seniority_level, years_of_experience, current_role, current_company, source, skills, work_experience, education, resume_text, cover_letter } = req.body;
    const candidate = { id, full_name, email, phone, location, linkedin_url, github_url, portfolio_url, summary, seniority_level, years_of_experience: years_of_experience || 0, current_role, current_company, source: source || 'Upload', status: 'Active', overall_score: 0, ghost_status: 0, in_passive_pool: 0, resume_text, cover_letter, avatar_url: null, created_at: new Date().toISOString(), updated_at: new Date().toISOString() };
    db.insert('candidates', candidate);
    if (skills) skills.forEach(s => db.insert('candidate_skills', { id: uuidv4(), candidate_id: id, skill_name: s.name || s.skill_name, category: s.category || 'Other', proficiency_level: s.proficiency || 3 }));
    if (work_experience) work_experience.forEach(w => db.insert('work_experience', { id: uuidv4(), candidate_id: id, ...w }));
    if (education) education.forEach(e => db.insert('education', { id: uuidv4(), candidate_id: id, ...e }));
    db.insert('activity_log', { id: uuidv4(), candidate_id: id, action: 'Candidate Created', details: `${full_name} added via ${source || 'Upload'}`, actor: 'System', created_at: new Date().toISOString() });
    db.save();
    res.status(201).json({ data: { id, full_name, email }, message: 'Candidate created' });
  } catch (err) { res.status(500).json({ error: { message: err.message } }); }
});

// POST /candidates/:id/passive-pool — add a candidate to passive pool
router.post('/:id/passive-pool', (req, res) => {
  try {
    const db = getDb();
    const candidateId = req.params.id;
    const candidate = db.data.candidates.find(c => c.id === candidateId);
    if (!candidate) return res.status(404).json({ error: { message: 'Candidate not found' } });

    // Check if already in pool
    const existing = (db.data.passive_pool || []).find(p => p.candidate_id === candidateId);
    if (existing) {
      return res.json({ message: 'Already in passive pool', data: existing });
    }

    const poolEntry = {
      id: uuidv4(),
      candidate_id: candidateId,
      reason: req.body.reason || 'Added to passive talent pool.',
      added_at: new Date().toISOString(),
    };
    db.insert('passive_pool', poolEntry);

    // Also set in_passive_pool flag on candidate
    const idx = db.data.candidates.findIndex(c => c.id === candidateId);
    if (idx >= 0) {
      db.data.candidates[idx].in_passive_pool = 1;
      db.data.candidates[idx].updated_at = new Date().toISOString();
    }

    db.insert('activity_log', { id: uuidv4(), candidate_id: candidateId, action: 'Added to Passive Pool', details: poolEntry.reason, actor: 'Recruiter', created_at: new Date().toISOString() });
    db.save();

    res.status(201).json({ message: 'Candidate added to passive pool', data: poolEntry });
  } catch (err) { res.status(500).json({ error: { message: err.message } }); }
});

// DELETE /candidates/:id/passive-pool — remove from passive pool
router.delete('/:id/passive-pool', (req, res) => {
  try {
    const db = getDb();
    const candidateId = req.params.id;
    db.delete('passive_pool', p => p.candidate_id === candidateId);

    const idx = db.data.candidates.findIndex(c => c.id === candidateId);
    if (idx >= 0) {
      db.data.candidates[idx].in_passive_pool = 0;
      db.data.candidates[idx].updated_at = new Date().toISOString();
    }
    db.save();
    res.json({ message: 'Removed from passive pool' });
  } catch (err) { res.status(500).json({ error: { message: err.message } }); }
});

// PUT /candidates/:id
router.put('/:id', (req, res) => {
  try {
    const db = getDb();
    const idx = db.data.candidates.findIndex(c => c.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: { message: 'Not found' } });
    const allowed = ['full_name','email','phone','location','summary','seniority_level','years_of_experience','current_role','current_company','status','overall_score','culture_fit_score','ghost_status'];
    allowed.forEach(f => { if (req.body[f] !== undefined) db.data.candidates[idx][f] = req.body[f]; });
    db.data.candidates[idx].updated_at = new Date().toISOString();
    db.save();
    res.json({ message: 'Updated' });
  } catch (err) { res.status(500).json({ error: { message: err.message } }); }
});

// POST /candidates/:id/notes
router.post('/:id/notes', (req, res) => {
  try {
    const db = getDb();
    const id = uuidv4();
    db.insert('notes', { id, candidate_id: req.params.id, author: req.body.author || 'Recruiter', content: req.body.content, created_at: new Date().toISOString() });
    db.insert('activity_log', { id: uuidv4(), candidate_id: req.params.id, action: 'Note Added', details: (req.body.content||'').substring(0, 100), actor: req.body.author || 'Recruiter', created_at: new Date().toISOString() });
    db.save();
    res.status(201).json({ data: { id }, message: 'Note added' });
  } catch (err) { res.status(500).json({ error: { message: err.message } }); }
});

// POST /candidates/bulk/action
router.post('/bulk/action', (req, res) => {
  try {
    const db = getDb();
    const { candidate_ids, action, params: ap } = req.body;
    if (action === 'move_stage' && ap?.stage_id && ap?.job_id) {
      candidate_ids.forEach(cid => { const idx = db.data.applications.findIndex(a => a.candidate_id === cid && a.job_id === ap.job_id); if (idx >= 0) { db.data.applications[idx].stage_id = ap.stage_id; db.data.applications[idx].stage_entered_at = new Date().toISOString(); } });
    } else if (action === 'update_status') {
      candidate_ids.forEach(cid => { const idx = db.data.candidates.findIndex(c => c.id === cid); if (idx >= 0) db.data.candidates[idx].status = ap?.status || 'Active'; });
    }
    db.save();
    res.json({ message: `Bulk action on ${candidate_ids.length} candidates` });
  } catch (err) { res.status(500).json({ error: { message: err.message } }); }
});

module.exports = router;
