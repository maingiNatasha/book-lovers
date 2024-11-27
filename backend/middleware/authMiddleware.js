const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];

            // Verify and decode the JWT token to retrieve user's ID
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Retrieve user credentials excluding the password
            req.user = await User.findById(decoded.id).select('-password');

            // Pass control to the next middleware or route handler which is the getUserProfile method
            next();
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error('You are not authorized, token not valid');
        }
    }

    if (!token) {
        res.status(401);
        throw new Error('You are not authorized, no token');
    }
});

module.exports = { protect };