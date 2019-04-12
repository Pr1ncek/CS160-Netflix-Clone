var mongoose = require('mongoose');

// Create Comment Schema
var CommentSchema = new mongoose.Schema({
	dateCreate: {type: Date, default: Date.now},
    text: {type: String},
    movieID: {type: mongoose.Schema.Types.ObjectId, ref:'Movie'},
    userID: {type: mongoose.Schema.Types.ObjectId, ref:'User'}
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;