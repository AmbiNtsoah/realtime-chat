const mongoose = require('mongoose');
const environement = require('dotenv').config();
const url = process.env.MONGO_URL;

const link_DB = async() => {
    mongoose.connect(url)
    .then(() => console.log('Database connected !'))
    .catch(() => console.log('Connexion Attempt Failed !'));

}
module.exports = link_DB;