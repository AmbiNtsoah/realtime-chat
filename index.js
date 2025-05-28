// Importer les modules, dépendences nécéssaires
const express = require('express');
const cors = require('cors');
const server = express();
const environement = require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
const authRoutes = require('./routes/auth.routes');
const connectDB = require('./databases/db');

const PORT = 9669;

// Middlewares
server.use(cors());
server.use(express.json());
server.use(bodyParser.urlencoded({ extended : true }));
server.use(express.static('views'));
server.set('view engine', 'ejs');
server.set('views', './views');

// Routes
server.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'views/html', 'loginSignUpForm.html'));
})
server.use('/auth', authRoutes);

// Connexion database
connectDB();

// Server launched
server.listen(PORT, ()=> {
    console.log(`Server launched in http://localhost:${PORT}`);
});
