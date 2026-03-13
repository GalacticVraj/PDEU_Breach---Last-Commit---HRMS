const { Anthropic } = require('@anthropic-ai/sdk');

class AIService {
  constructor() {
    this.anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY || 'dummy-key-for-dev',
    });
  }

  async semanticCandidateSearch(naturalLanguageQuery, candidates) {
    try {
      // In a real app we'd fetch candidates from DB and do vector search.
      // Here we simulate the LLM analyzing the query against a mock DB.
      
      const systemPrompt = `You are an expert recruitment AI. Parse the user's natural language query to extract:
1. Required skills (array)
2. Location preference (string or null)
3. Experience level (string or null)
4. Other preferences (array)

Then evaluate these candidates against the query and return the top matches with a score (0-100) and a 2-sentence explanation of why they match.

Return ONLY a JSON object with this exact format:
{
  "parsedQuery": { "skills": [], "location": "", "experience": "", "preferences": [] },
  "rankedCandidates": [
    { "id": number, "score": number, "matchReason": "string" }
  ]
}`;

      const candidatesContext = JSON.stringify(candidates.map(c => ({
        id: c.id,
        role: c.role,
        skills: c.skills,
        location: c.location,
        experience: c.experience,
        about: c.about
      })));

      console.log(`Sending query to Claude: "${naturalLanguageQuery}"`);

      // Mock response if no actual API key is present or we're in dev mode
      if (!process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY === 'your_anthropic_api_key_here') {
        console.log("No valid Anthropic connection. Using fallback simulated response for demo purposes.");
        return this._simulateAIResponse(naturalLanguageQuery, candidates);
      }

      const response = await this.anthropic.messages.create({
        model: 'claude-3-sonnet-20240229',
        system: systemPrompt,
        max_tokens: 1024,
        messages: [{
          role: 'user',
          content: `Query: "${naturalLanguageQuery}"\n\nCandidates Data:\n${candidatesContext}`
        }]
      });

      const responseText = response.content[0].text;
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
         return JSON.parse(jsonMatch[0]);
      }
      throw new Error("Could not parse JSON from Claude response");

    } catch (error) {
      console.error('Error in semantic search:', error);
      throw error;
    }
  }

  // Fallback for demonstration when no actual API key is present
  _simulateAIResponse(query, candidates) {
    // Basic keyword parsing logic to simulate AI
    const q = query.toLowerCase();
    const parsedQuery = {
      skills: ['React', 'Python', 'AWS'].filter(s => q.includes(s.toLowerCase())),
      location: q.includes('mumbai') ? 'Mumbai' : q.includes('remote') ? 'Remote' : null,
      experience: q.includes('5+') || q.includes('senior') ? '5+ years' : null,
      preferences: []
    };

    const rankedCandidates = candidates.map(c => {
      let score = 50;
      let reasons = [];
      
      const roleStr = c.role.toLowerCase();
      const skillsStr = c.skills.join(' ').toLowerCase();
      const locStr = c.location.toLowerCase();

      // Simple scoring
      if (q.includes('react') && skillsStr.includes('react')) { score += 20; reasons.push('Strong React background.'); }
      if (q.includes('python') && skillsStr.includes('python')) { score += 20; reasons.push('Python expertise.'); }
      if (q.includes('aws') && skillsStr.includes('aws')) { score += 15; reasons.push('AWS certified or experienced.'); }
      if (q.includes('mumbai') && locStr.includes('mumbai')) { score += 10; reasons.push('Located in target city.'); }
      if (q.includes('remote') && locStr.includes('remote')) { score += 10; reasons.push('Open to remote work.'); }
      if (q.includes('senior') && roleStr.includes('senior')) { score += 10; reasons.push('Meets seniority requirements.'); }

      return {
        id: c.id,
        score: Math.min(score, 98),
        matchReason: reasons.length > 0 ? reasons.join(' ') : 'Matches general profile parameters.'
      };
    }).sort((a, b) => b.score - a.score).filter(c => c.score > 60);

    return { parsedQuery, rankedCandidates };
  }
}

module.exports = new AIService();
