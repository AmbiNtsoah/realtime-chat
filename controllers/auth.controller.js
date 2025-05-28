const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: 'Email déjà utilisé' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'Utilisateur créé avec succès' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });

    const token = jwt.sign({ id: user._id }, 'votre_clé_secrète', { expiresIn: '1h' });

    res.json({ message: 'Connexion réussie', token });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
};
