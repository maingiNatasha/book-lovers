const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Name is required'],
            unique: true
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        }
    }
);

module.exports = mongoose.model('User', userSchema);