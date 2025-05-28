const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(url, {});
    console.log('MongoDB connecté');
  } catch (error) {
    console.error('Erreur de connexion MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectDB;