const express = require('express');
const router = express.Router();

// Mock Candidate Data Route
router.get('/', (req, res) => {
  res.json({
    status: 'success',
    data: [
      { id: 1, name: 'Alex Rivera', role: 'Sr. Frontend Engineer', match: 94 },
      { id: 2, name: 'Sarah Chen', role: 'Product Manager', match: 88 }
    ]
  });
});

module.exports = router;
