const express = require('express');
const router = express.Router();
const { getDb } = require('../database');
const vectorEngine = require('../utils/vector-engine');

async function getSemanticContext(db, query) {
  try {
    const candidates = db.data.candidates || [];
    const embeddings = db.data.candidate_embeddings || [];
    if (!embeddings.length || query.length < 5) return [];

    const queryVec = await vectorEngine.generateEmbedding(query);
    const scored = embeddings.map(emb => {
      const score = vectorEngine.cosineSimilarity(queryVec, emb.embedding);
      return { candidate_id: emb.candidate_id, score };
    }).sort((a, b) => b.score - a.score).slice(0, 5);

    const relevant = scored.map(s => candidates.find(c => c.id === s.candidate_id)).filter(Boolean);
    return relevant;
  } catch (err) {
    console.error('Semantic search error:', err);
    return [];
  }
}

function buildLiveCandidateContext(db, semanticResults = []) {
  const candidates = db.data.candidates || [];
  const jobs = db.data.jobs || [];
  const appLog = db.data.activity_log || [];
  const apps = db.data.applications || [];
  const feedback = db.data.interview_feedback || [];

  if (!candidates.length) return 'No candidates in database yet.';

  // 1. Company Profile
  const company = db.data.company_profile?.[0] || { name: 'HireX Client' };
  const values = (db.data.company_values || []).map(v => v.value).join(', ');

  // 2. Job Summary
  const activeJobs = jobs.filter(j => j.status === 'Active');
  const jobLines = activeJobs.slice(0, 8).map(j => `- ${j.title} [ID: ${j.id}] (${j.department || 'N/A'}, ${j.location || 'Remote'})`);

  // 3. Top Candidates (Detailed)
  const topPriority = [...candidates]
    .sort((a, b) => (b.overall_score || 0) - (a.overall_score || 0))
    .slice(0, 10);

  // Merge semantic results if they aren't in the top priority list
  const merged = [...topPriority];
  semanticResults.forEach(sc => {
    if (!merged.find(m => m.id === sc.id)) {
      merged.push(sc);
    }
  });

  const candidateLines = merged.map((c) => {
    const skills = (db.data.candidate_skills || [])
      .filter(s => s.candidate_id === c.id)
      .map(s => s.skill_name)
      .slice(0, 6)
      .join(', ');
    
    const candidateApps = apps.filter(a => a.candidate_id === c.id);
    const appliedTo = candidateApps.map(a => {
      const j = jobs.find(job => job.id === a.job_id);
      return j ? `${j.title} (${a.status})` : null;
    }).filter(Boolean).join(', ');

    const ghostFlag = c.ghost_status ? ' [GHOST_RISK]' : '';
    const poolFlag = c.in_passive_pool ? ' [PASSIVE_POOL]' : '';
    
    return `- ${c.full_name} [ID: ${c.id}]: ${c.current_role} at ${c.current_company}, ${c.years_of_experience}y, Match: ${c.overall_score}%, Status: ${c.status}. Summary: ${c.summary || 'N/A'}. Applied to: ${appliedTo || 'General Pool'}. Skills: ${skills}${ghostFlag}${poolFlag}`;
  });

  // 4. Recent Activity Log
  const recentEvents = [...appLog]
    .sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0))
    .slice(0, 8)
    .map(log => {
      const c = candidates.find(cand => cand.id === log.candidate_id);
      return `- [${new Date(log.created_at).toLocaleDateString()}] ${log.action}: ${c ? c.full_name : 'System'} - ${log.details || ''}`;
    });

  // 5. Interview Feedback Snippets
  const recentFeedback = feedback.slice(0, 5).map(f => {
    const c = candidates.find(cand => cand.id === f.candidate_id);
    return `- ${c ? c.full_name : 'Unknown'}: Rating ${f.rating}/5 - "${f.strengths || 'N/A'}"`;
  });

  const semanticTag = semanticResults.length > 0 ? `\nSemantic Match Results for query "${semanticResults.length} candidates":\n` : '';

  return `
--- CONTEXT FOR HIREX SYSTEM ---
Company: ${company.name} (Values: ${values})
Global Stats:
- Total Candidates: ${candidates.length}
- Active Jobs: ${activeJobs.length}
- Ghost Risks: ${candidates.filter(c => c.ghost_status).length}
- Passive Pool: ${(db.data.passive_pool || []).length}

Recent Activity:
${recentEvents.join('\n') || 'No recent activity.'}

Active Job Openings:
${jobLines.join('\n') || 'No active jobs.'}

Candidates in Focus (Top Priority + Query Matches):
${candidateLines.join('\n')}

Interview Feedback (Recent):
${recentFeedback.join('\n') || 'No recent feedback.'}
-------------------------------
`;
}

router.post('/', async (req, res) => {
  try {
    const { message, context } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message required' });
    }

    // Load live context from DB
    const db = getDb();
    
    // 1. Get semantic matches based on user's query
    const semanticResults = await getSemanticContext(db, message);
    
    // 2. Build full rich context
    const candidatesContext = buildLiveCandidateContext(db, semanticResults);

    const GROQ_API_KEY = process.env.GROQ_API_KEY;
    
    if (!GROQ_API_KEY) {
       // Context-aware mock response using live DB data
       let contextIntro = '';
       if (context && context.path) {
         if (context.path.includes('/candidates')) {
           contextIntro = '**[Candidate Database View]** ';
         } else if (context.path === '/' || context.path.includes('/dashboard')) {
           contextIntro = '**[Dashboard Overview]** ';
         } else if (context.path.includes('/pipeline')) {
           contextIntro = '**[Pipeline Board View]** ';
         }
       }

       const lowerMsg = message.toLowerCase();
       let smartReply = '';

       // Generate context-specific responses using live DB data
       const db2 = getDb();
       const candidates = db2.data.candidates || [];
       const topCand = [...candidates].sort((a, b) => (b.overall_score || 0) - (a.overall_score || 0)).slice(0, 3);
       const ghosts = candidates.filter(c => c.ghost_status);

       if (lowerMsg.includes('ghost') || lowerMsg.includes('unresponsive')) {
         smartReply = ghosts.length > 0
           ? `I found **${ghosts.length} ghost candidates** in your pipeline — candidates who have gone unresponsive. \n\nTop ghost risk: **${ghosts[0].full_name}** (${ghosts[0].current_role}). I recommend sending a personalized re-engagement email to each of them.`
           : `Good news — no ghost candidates detected in your pipeline right now. All active candidates have recent activity. 🎉`;
       } else if (lowerMsg.includes('top') || lowerMsg.includes('best') || lowerMsg.includes('recommend') || lowerMsg.includes('who')) {
         if (topCand.length > 0) {
           const names = topCand.map(c => `**${c.full_name}** (${c.overall_score || 0}% match, ${c.current_role})`).join(', ');
           smartReply = `Your top AI-matched candidates right now are: ${names}. They score highest on skills overlap, experience depth, and culture fit signals.`;
         } else {
           smartReply = `No candidates in the database yet. Upload some resumes to get AI-powered match rankings!`;
         }
       } else if (lowerMsg.includes('hire by friday') || lowerMsg.includes('fast') || lowerMsg.includes('urgent')) {
         smartReply = `For a fast hire, I suggest focusing on candidates already in the **Interview or Offer** stages. Check the **Hire by Friday** mode on the Dashboard — it'll generate a prioritized action plan based on your target date and pipeline status.`;
       } else if (lowerMsg.includes('passive') || lowerMsg.includes('pool')) {
         const poolCount = (db2.data.passive_pool || []).length;
         smartReply = poolCount > 0
           ? `Your Passive Talent Pool has **${poolCount} candidates** who were previously rejected but match our role profiles. You can re-activate any of them from the Pipeline page. They're often the fastest hires!`
           : `Your Passive Talent Pool is currently empty. When you reject candidates in the Pipeline, you'll have the option to add them to the pool for future role matching.`;
       } else if (lowerMsg.includes('email') || lowerMsg.includes('draft') || lowerMsg.includes('message')) {
         const cand = topCand[0];
         const targetName = cand ? cand.full_name.split(' ')[0] : 'Candidate';
         const targetRole = cand ? cand.current_role : 'the role';
         smartReply = `Here's a draft outreach email:\n\n---\nHi ${targetName},\n\nWe were impressed by your background in **${targetRole}** and would love to discuss an exciting opportunity. Are you open to a quick 30-minute call this week?\n\nLooking forward to hearing from you!\n\nBest,\nThe Talent Team\n---\n\nFeel free to personalize before sending!`;
       } else {
         const totalCands = candidates.length;
         const activeJobs = (db2.data.jobs || []).filter(j => j.status === 'Active').length;
         smartReply = `${contextIntro}I have access to **${totalCands} candidates** across **${activeJobs} active jobs**. Ask me to:\n• Find top matches for a role\n• Identify ghost candidates\n• Draft outreach emails\n• Summarize pipeline health\n• Recommend next actions\n\nReceived your query: "${message}"`;
       }

       return res.json({ 
         reply: smartReply || `${contextIntro}${message}. *(Mock mode — add GROQ_API_KEY for full AI responses.)*` 
       });
    }

    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system',
            content: `You are TalentOS AI, a premium recruitment intelligence assistant. 
You have REALT-TIME access to the following project data:
- Candidate Database (Top priority matches, skills, and current statuses)
- Active Job Openings (Department, location, and titles)
- Recent System Activity (Status changes, emails sent, new uploads)
- Interview Insights (Feedback snippets and ratings)

${candidatesContext}

Interaction Rules:
1. **Action-Oriented**: Always suggest the next logical step (e.g., "Would you like me to draft an email for Sarah?").
2. **Deep Linking**: Use [Text](/path) for EVERY navigation suggestion.
   - Database: [/candidates](/candidates)
   - Profile: [/candidates/:id](/candidates/[ID]) - e.g. [View Profile](/candidates/123)
   - Pipeline: [/pipeline](/pipeline)
   - Dashboard: [/dashboard](/dashboard)
   - Job Details: [/jobs/:id](/jobs/[ID])
3. **Intelligence**: Use the **Activity Log** and **Interview Feedback** to provide context. (e.g., "I see Sarah was moved to Screening yesterday.")
4. **Data-Driven**: Cite specific scores (e.g., "**94% match**") and recent actions from the log.
4. **Formatting**: Use **bold** for names and metrics. Use bullet points (•) for lists.
5. **Tone**: Professional, high-energy, and helpful.`
          },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!groqResponse.ok) {
      const errText = await groqResponse.text();
      console.error('Groq API error:', errText);
      throw new Error(`Groq API error: ${groqResponse.status}`);
    }

    const data = await groqResponse.json();
    res.json({ reply: data.choices[0].message.content });

  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Failed to process AI chat message' });
  }
});

module.exports = router;
