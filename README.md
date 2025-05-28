# 📱 Realtime Chat

Une application de chat en temps réel construite avec Node.js, Express et Socket.IO. Elle permet à plusieurs utilisateurs de rejoindre des discussion et d'échanger des messages instantanément via le navigateur.

## 🚀 Fonctionnalités

* 🔐 Authentification des utilisateurs
* 💬 Messagerie en temps réel via WebSockets
* 🧑‍🤝‍🧑 Prise en charge d'utilisaterus connecté
* 🕒 Affichage des messages avec horodatage
* 🎨 Interface utilisateur

## 🛠️ Technologies utilisées

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [Socket.IO](https://socket.io/)
* [MongoDB](https://www.mongodb.com/)
* [EJS](https://ejs.co/)

## 📦 Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/AmbiNtsoah/realtime-chat.git
   cd realtime-chat
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Configurez les variables d'environnement dans un fichier `.env` :

   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Lancez l'application :

   ```bash
   npm start
   ```

5. Accédez à l'application via [http://localhost:3000](http://localhost:3000)

## 🥪 Scripts disponibles

* `npm start` : Démarre le serveur en mode production

## 📁 Structure du projet

```
realtime-chat/
├── databases/            # Connexion à la base de donnée
├── views/                # Templates / HTML
├── routes/               # Routes Express
├── models/               # Modèles de données (utilisateurs, messages)
├── controllers/          # controllers des messages et authentifications
├── middlewares/          # Middleware sécuriser des routes
├── .env                  # Variables d'environnement
└── server.js             # Point d'entrée principal
```

