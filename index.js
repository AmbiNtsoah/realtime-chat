// Importer les modules, dépendences nécéssaires
const express = require('express');
const { default: mongoose } = require('mongoose');
const server = express();
const environement = require('dotenv').config();

const PORT = 9669;
const url = process.env.MONGO_URL;

server.get('/', (request, response) => {
    response.send('Hello Chat App');
});


mongoose.connect(url)
.then(() => console.log('Database connected !'))
.catch(() => console.log('Connexion Attempt Failed !'));

server.listen(PORT, ()=> {
    console.log(`Server launched in http://localhost:${PORT}`);
});
