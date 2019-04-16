const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const keys = require('../config/keys');

const validateRegistrationInputs = require('../validation/register');
const validateLoginInputs = require('../validation/login');

const User = require('../Model/User');

const router = express.Router();

// @route   POST api/auth/login
// @desc    user login / generate JWT
// @access  Public
router.post('/login', async (req, res) => {
  const { errors, isValid } = validateLoginInputs(req.body);
  if (!isValid) return res.status(400).json(errors);
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ ...errors, email: 'Email does not exist' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ ...errors, password: 'Incorrect Password' });
    const payload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      avatar: user.avatar,
      email: user.email
    };
    const token = await jwt.sign(payload, keys.JWT_SECRET, { expiresIn: '24h' });
    return res.json({ Msg: 'Success', token: `Bearer ${token}` });
  } catch (error) {
    return res.status(400).json(error);
  } 
});

// @route   POST api/auth/register
// @desc    user registration
// @access  Public
router.post('/register', async (req, res) => {
  const { errors, isValid } = validateRegistrationInputs(req.body);
  if (!isValid) return res.status(400).json(errors);
  const { firstName, lastName, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ ...errors, email: 'Email already exists' });
    const newUser = new User({ firstName, lastName, email, password });
    newUser.password = await bcrypt.hash(password, (saltRounds = 10));
    const savedUser = await newUser.save();
    return res.json({ Msg: 'Success', savedUser });
  } catch (error) {
    res.status(400).json(error);
  }
});

// @route   GET api/auth/current
// @desc    get current user
// @access  Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  return res.json({ Msg: 'Success', user: req.user });
});

module.exports = router;