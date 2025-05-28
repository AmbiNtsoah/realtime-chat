// // Importer les modules, dépendences nécéssaires
// const express = require('express');
// const cors = require('cors');
// const http = require('http');
// const {Server} = require('socket.io');
// const server = express();
// require('dotenv').config();
// const bodyParser = require('body-parser');
// const path = require('path');
// const jwt = require('jsonwebtoken');
// const authRoutes = require('./routes/auth.routes');
// const connectDB = require('./databases/db');
// const userRoutes = require('./routes/user.routes');
// const setupChat =require('./socket');

// const PORT = process.env.PORT;
// const io = new Server(server);

// // Middlewares
// server.use(cors());
// server.use(express.json());
// server.use(bodyParser.urlencoded({ extended : true }));
// server.use(express.static('views'));
// server.set('view engine', 'ejs');
// server.set('views', './views');

// // Routes
// server.get('/', (request, response) => {
//     response.sendFile(path.join(__dirname, 'views/html', 'index.html'));
// });
// server.get('/message', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views/html', 'chat.html'));
// });
// server.use('/auth', authRoutes);
// server.use('/user', userRoutes);

// // Connexion database
// connectDB();

// setupChat(io);

// // Server launched
// server.listen(PORT, ()=> {
//     console.log(`Server launched in http://localhost:${PORT}`);
// });
// Importer les modules, dépendances nécessaires
const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

// Charger les fichiers
dotenv.config();
const connectDB = require('./databases/db');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const setupChat = require('./socket');

// Création de l'application et du serveur HTTP
const app = express();
const server = http.createServer(app);
const io = new Server(server); // socket.io attaché au serveur HTTP

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views'));
app.set('view engine', 'ejs');
app.set('views', './views');

// Connexion DB
connectDB();

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/html', 'index.html'));
});
app.get('/message', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/html', 'chat.html'));
});
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

// Setup chat socket.io
setupChat(io);

// Lancement du serveur
const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`Serveur lancé : http://localhost:${PORT}`);
});
