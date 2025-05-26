const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    // is_online:  { type: String, default: '0' }
});

module.exports = mongoose.model('users', UserSchema);