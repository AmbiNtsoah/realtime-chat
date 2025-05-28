const Message = require('../models/Messages.model');

exports.saveMessage = async (email, content) => {
  const newMessage = new Message({ email, content });
  return await newMessage.save();
};

exports.getAllMessages = async () => {
  return await Message.find().sort({ timestamp: 1 });
};
