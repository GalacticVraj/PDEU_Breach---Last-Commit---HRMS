const express = require('express');
const router = express.Router();
const multer = require('multer');
const resumeParser = require('../services/resumeParser');

// Configure multer for memory storage
const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
       cb(null, true);
    } else {
       cb(new Error('Only PDF files are allowed!'), false);
    }
  }
});

// Helper for generic error message
const sendError = (res, statusCode, message) => {
  return res.status(statusCode).json({ status: 'error', message });
};

// POST /api/upload/resume
router.post('/resume', upload.single('resume'), async (req, res) => {
  try {
    if (!req.file) {
      return sendError(res, 400, 'No PDF file uploaded');
    }

    // 1. Process via pdf-parse & Claude AI
    const parsedData = await resumeParser.parseResume(req.file.buffer);

    // 2. Format result as Candidate object for DB
    const newCandidate = {
      id: Math.floor(Math.random() * 10000), // mock DB id
      name: parsedData.name || 'Unknown',
      email: parsedData.email || 'N/A',
      phone: parsedData.phone || 'N/A',
      location: parsedData.location || 'Unknown',
      role: parsedData.currentRole || 'Candidate',
      company: parsedData.company || 'N/A',
      experience: parsedData.experience?.length ? `${parsedData.experience.length * 2} yrs` : 'Entry', // Mocking total yrs
      education: parsedData.education || [],
      skills: parsedData.skills || [],
      source: 'Upload',
      status: 'New',
      avatar: parsedData.name ? parsedData.name.charAt(0).toUpperCase() : 'U',
      score: Math.floor(Math.random() * 40) + 50, // Mock initial score before full pipeline run
      timeline: [
        { date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }), event: 'Resume parsed by AI', type: 'ai' }
      ]
    };

    // 3. (Mock) Save to Database / Check for duplicates
    // In a real app we would query DB by email/phone to merge records

    res.status(201).json({
      status: 'success',
      message: 'Resume parsed successfully',
      data: newCandidate
    });

  } catch (error) {
    console.error('Upload error:', error.message);
    sendError(res, 500, error.message || 'Error processing resume');
  }
});

// POST /api/upload/bulk
router.post('/bulk', upload.array('resumes', 10), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return sendError(res, 400, 'No PDF files uploaded');
    }

    const maxFiles = 10;
    if (req.files.length > maxFiles) {
      return sendError(res, 400, `Maximum ${maxFiles} files allowed per batch`);
    }

    // Process all PDFs concurrently via Promise.all
    const parsePromises = req.files.map(file => resumeParser.parseResume(file.buffer));
    
    // We use allSettled so one bad PDF doesn't break the whole batch
    const results = await Promise.allSettled(parsePromises);
    
    const successfulParses = [];
    const failedParses = [];

    results.forEach((result, index) => {
      const fileName = req.files[index].originalname;
      if (result.status === 'fulfilled') {
        successfulParses.push({
          fileName,
          data: result.value
        });
      } else {
        failedParses.push({
          fileName,
          error: result.reason.message
        });
      }
    });

    res.status(200).json({
      status: 'success',
      message: `Processed ${req.files.length} resumes`,
      data: {
        successful: successfulParses,
        failed: failedParses
      }
    });

  } catch (error) {
    console.error('Bulk upload error:', error);
    sendError(res, 500, 'Error processing bulk upload');
  }
});

module.exports = router;
