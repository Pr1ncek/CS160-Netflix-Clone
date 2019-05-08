const express = require('express');
const router = express.Router();

const Comment = require('../Model/Comment');

// @route GET api/comments/getMovieComments
// @desc search for comments by its movieId, grab user's name
// @access Public
router.get('/getMovieComments', (req, res) => {
   Comment.find({movie: req.query.id}).populate('user').then(comment => {
       return res.status(200).json({comment: comment});
   }).catch(err => {
       console.log(err);
       return res.status(401).send(err);
   });
});

//@route    POST api/comments/postComment
//@desc     post a new comment
//@access   public
router.post('/postComment', (req, res) => {
    var newComment = new Comment({movie: req.body.movieID, user: req.body.userID, text: req.body.text});
    newComment.save();
    return res.status(200).json(newComment);
});
module.exports = router;