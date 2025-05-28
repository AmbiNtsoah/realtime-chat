const saveMessage = require('./controllers/messages.controller');

const connectedUsers = {};

function setupChat(io) {
  io.on('connection', (socket) => {
    console.log(' Socket connecté:', socket.id);

    socket.on('join', (email) => {
      connectedUsers[socket.id] = email;
      io.emit('userList', Object.values(connectedUsers));
    });

    socket.on('chatMessage', async ({ email, message }) => {
      await saveMessage(email, message);
      io.emit('chatMessage', { email, message });
    });

    socket.on('disconnect', () => {
      delete connectedUsers[socket.id];
      io.emit('userList', Object.values(connectedUsers));
      console.log(' Déconnecté:', socket.id);
    });
  });
}

module.exports = setupChat;