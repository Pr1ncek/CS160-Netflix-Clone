const mongoose = require('mongoose');

// Create Schema
var userSchema = new mongoose.Schema({
  avatar: {type: String},
  userName: {type: String},
  firstName: {type: String},
  lastName: {type: String},
  email: {type: String},
  password: {type: String}//,
  //favorites: {type: [String]}//,
  //comments: {[userID, commentText, author, avatar]},
  //history: {[movieID, timestamp]}
});

var User = mongoose.model('User', userSchema);

module.exports = User;