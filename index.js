// Importer les modules, dépendences nécéssaires
const express = require('express');
const server = express();
const PORT = 6699;

server.get('/', (request, response) => {
    response.send('Hello Chat App');
});

server.listen(PORT, ()=> {
    console.log(`Server launched in http://localhost:${PORT}`);
});
