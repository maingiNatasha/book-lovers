const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Register new user
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    // Check if all fields are filled
    if (!username || !email || !password) {
        res.status(400);
        throw new Error('All fields are required');
    }

    const userExists = await User.findOne({ email });

    // Check if user already exists
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    // Generate a salt with a complexity of 10
    const salt = await bcrypt.genSalt(10);

    // Hash the password using generated salt
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user and save it in the database
    const user = await User.create({ username, email, password: hashedPassword });

    if (user) {
        res.status(201).json({ message: 'User registered successfully', token: generateJWTtoken(user._id) });
    }
    else {
        res.status(400);
        throw new Error('User registration failed');
    }
});

// Login existing user
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error('All fields are required');
    }

    const user = await User.findOne({ email });

    // Check if user exists and password matches
    if (!user || !await bcrypt.compare(password, user.password)) {
        res.status(400);
        throw new Error('Invalid credentials');
    } else {
        res.status(200).json({ message: 'Login successful', token: generateJWTtoken(user._id) });
    }
});

// Get user information
const getUserProfile = asyncHandler(async (req, res) => {
    // Use req.user obtained in authMiddleware
    if (req.user) {
        res.status(200).json({
            id: req.user._id,
            username: req.user.username,
            email: req.user.email,
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

// Generate jwt token
const generateJWTtoken = id => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '2d'});

module.exports = { registerUser, loginUser, getUserProfile };