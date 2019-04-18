const mongoose = require('mongoose');

// Create Schema
const commentSchema = new mongoose.Schema({
  movie: {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'movie'
  },
  user: {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'user'
  },
  text: {type: String},
  updated: {
    type: Date,
    default: Date.now
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
