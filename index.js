// Importer les modules, dépendences nécéssaires
const express = require('express');
const { default: mongoose } = require('mongoose');
const server = express();
const environement = require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('./routes/auth.routes');

const PORT = 9669;
const url = process.env.MONGO_URL;

// Middlewares
server.use(express.json());
server.use(bodyParser.urlencoded({ extended : true }));
server.use(express.static('views'));
server.set('view engine', 'ejs');
server.set('views', './views');

// Routes
server.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'views/html', 'loginSignUpForm.html'));
})
// server.use('/', authRoutes);

// Connexion database
mongoose.connect(url)
.then(() => console.log('Database connected !'))
.catch(() => console.log('Connexion Attempt Failed !'));

// Server launched
server.listen(PORT, ()=> {
    console.log(`Server launched in http://localhost:${PORT}`);
});
