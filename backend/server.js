const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
const bookRoutes = require('./routes/books');

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for cross-origin requests
app.use(cors());

// Routes
app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));