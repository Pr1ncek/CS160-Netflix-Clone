const mongoose = require('mongoose');

// Create Schema
const profileSchema = new mongoose.Schema({
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
  avatar: {
    type: String,
    default: 'https://source.unsplash.com/random/200x200'
  },
  created: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('Profile', profileSchema);

module.exports = profile;