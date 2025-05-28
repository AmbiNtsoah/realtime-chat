const socket = io();

const userEmail = localStorage.getItem('userEmail');

// if (!userEmail) {
//   window.location.href = '/';
// }

socket.emit('join', userEmail);

socket.on('chatMessage', ({ email, message }) => {
  const li = document.createElement('li');
  li.textContent = `${email}: ${message}`;
  document.getElementById('message-list').appendChild(li);
});

socket.on('userList', (users) => {
  document.getElementById('users-online').innerHTML = 'Connectés : ' + users.join(', ');
});

function sendMessage() {
  const input = document.getElementById('message-input');
  const message = input.value.trim();
  if (message) {
    socket.emit('chatMessage', { email: userEmail, message });
    input.value = '';
  }
}

const token = localStorage.getItem('token');
        if (!token) {
            alert('Vous devez être connecté pour accéder au chat');
            window.location.href = '/';
        }

        // Receive messages from the server
        socket.on('message', (data) => {
            displayMessage(data);
        });

        // Display the received message
        function displayMessage(message) {
            const messageList = document.getElementById('message-list');
            const listItem = document.createElement('li');
            listItem.textContent = message;
            messageList.appendChild(listItem);
        }

        // // Send a new message to the server
        // function sendMessage() {
        //     const messageInput = document.getElementById('message-input');
        //     const message = messageInput.value.trim();

        //     if (message !== '') {
        //         socket.emit('chatMessage', message);
        //         displayMessage('You: ' + message);
        //         messageInput.value = '';
        //     }
        // }

        function handleLogout() {
            localStorage.removeItem('token');
            alert("Deconnexion ... ")
            window.location.href = '/';
        }