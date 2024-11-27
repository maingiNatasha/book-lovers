const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const errorHandler = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

const port = process.env.PORT || 5000;
connectDB();
const app = express();

// Enable CORS for cross-origin requests
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies e.g forms
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/books', require('./routes/bookRoutes'));
app.use('/api/user', require('./routes/userRoutes'));

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));