const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    senderId: ObjectId,
    receiverId: ObjectId,
    content: String,
    timestamp: Date
});

module.exports = mongoose.model('messages', MessageSchema);