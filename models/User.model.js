const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    // is_online:  { type: String, default: '0' }
});

module.exports = mongoose.model('users', UserSchema);