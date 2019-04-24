const mongoose = require('mongoose');

// Create Schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: 'https://source.unsplash.com/random/200x200'
  },
  created: {
    type: Date,
    default: Date.now
  },
  history: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    default: []
  }],
  favorites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    default: []
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;