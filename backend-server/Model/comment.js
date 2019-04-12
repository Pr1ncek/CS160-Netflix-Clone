var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    body: String,
    movie: {type: mongoose.Schema.Types.ObjectId, ref:'Movie'}
});

const Comment = mongoose.model('Comment', commentSchema);