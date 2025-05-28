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
