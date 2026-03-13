const express = require('express');
const router = express.Router();
const aiService = require('../services/aiService');

// Mock Database of Candidates
const ALL_CANDIDATES = [
  { id: 1, name: 'Priya Sharma', role: 'Senior React Developer', company: 'TechFlow', location: 'Mumbai', experience: '6 years', skills: ['React', 'TypeScript', 'AWS', 'Node.js'], source: 'LinkedIn', avatar: 'P' },
  { id: 2, name: 'Alex Johnson', role: 'Full Stack Engineer', company: 'FinCorp', location: 'Remote', experience: '5 years', skills: ['Python', 'React', 'AWS', 'Docker'], source: 'Upload', avatar: 'A' },
  { id: 3, name: 'David Lee', role: 'Frontend Architect', company: 'CloudBase', location: 'Bangalore', experience: '8 years', skills: ['React', 'Vue', 'Node.js'], source: 'HRMS', avatar: 'D' },
  { id: 4, name: 'Sarah Michaels', role: 'React Native Developer', company: 'Startup Inc', location: 'Mumbai', experience: '3 years', skills: ['React Native', 'React', 'Firebase'], source: 'Gmail', avatar: 'S' },
  { id: 5, name: 'Michael Chen', role: 'Backend Engineer', company: 'DataSystems', location: 'Remote', experience: '7 years', skills: ['Python', 'Django', 'AWS', 'PostgreSQL'], source: 'LinkedIn', avatar: 'M' }
];

// POST /api/search/natural -> natural language semantic search
router.post('/natural', async (req, res) => {
  try {
    const { query, filters } = req.body;
    
    if (!query) {
      return res.status(400).json({ status: 'error', message: 'Query is required' });
    }

    // 1. Initial filter applied to candidate pool if needed
    let filteredPool = ALL_CANDIDATES;
    if (filters && filters.source && filters.source !== 'All') {
      filteredPool = filteredPool.filter(c => c.source === filters.source);
    }

    // 2. Call AI Service to rank and parse
    const aiResult = await aiService.semanticCandidateSearch(query, filteredPool);
    
    // 3. Map AI results back to full candidate objects
    const results = aiResult.rankedCandidates.map(aiMatch => {
      const candidate = ALL_CANDIDATES.find(c => c.id === aiMatch.id);
      return {
        ...candidate,
        score: aiMatch.score,
        matchReason: aiMatch.matchReason
      };
    });

    res.json({
      status: 'success',
      data: {
        parsedQuery: aiResult.parsedQuery,
        results: results
      }
    });
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ status: 'error', message: 'Failed to perform semantic search' });
  }
});

// GET /api/search/filters
router.get('/filters', (req, res) => {
  res.json({
    status: 'success',
    data: {
      experiences: ['0-2 years', '3-5 years', '5-8 years', '8+ years'],
      skills: ['React', 'Python', 'AWS', 'Node.js', 'SQL', 'Docker', 'TypeScript'],
      locations: ['Mumbai', 'Bangalore', 'Remote', 'Delhi', 'New York'],
      sources: ['LinkedIn', 'Gmail', 'Upload', 'HRMS', 'Referral']
    }
  });
});

// POST /api/search/export
router.post('/export', (req, res) => {
  const { candidateIds } = req.body;
  // Mock CSV generation
  const csvData = "Name,Role,Location,Score\nPriya Sharma,Senior React Developer,Mumbai,96\n";
  
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="candidates.csv"');
  res.send(csvData);
});

module.exports = router;
