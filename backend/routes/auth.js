const express = require('express');
const passport = require('passport');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const user = new User({ username: req.body.username, email: req.body.email });
    await User.register(user, req.body.password);
    res.status(200).json({ message: 'User registered' });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.status(200).json({ message: 'Logged in', user: req.user });
});

router.get('/logout', (req, res) => {
  req.logout(() => res.status(200).json({ message: 'Logged out' }));
});

router.put('/change-password', async (req, res) => {
  const user = await User.findByUsername(req.body.username);
  if (!user) return res.status(404).json({ error: 'User not found' });
  await user.setPassword(req.body.newPassword);
  await user.save();
  res.status(200).json({ message: 'Password updated' });
});

module.exports = router;
