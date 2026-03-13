const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mock Routes setup
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'TalentOS API is running normally.' });
});

// Import routes
const candidateRoutes = require('./routes/candidates');
const searchRoutes = require('./routes/search');
const uploadRoutes = require('./routes/upload');
const chatRoutes = require('./routes/chat');

// Mount routes
app.use('/api/candidates', candidateRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/chat', chatRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: err.message || 'Internal Server Error'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
