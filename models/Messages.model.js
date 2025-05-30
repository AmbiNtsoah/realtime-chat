const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    email: String,
    content: String,
    timestamp: {type: Date, default: Date.now}
});

module.exports = mongoose.model('messages', MessageSchema);