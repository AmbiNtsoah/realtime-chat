const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.middlewares');

router.get('/profile', auth, (req, res) => {
  res.json({
    message: 'Voici les infos privées',
    userId: req.user.id
  });
});

module.exports = router;
