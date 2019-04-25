const express = require('express');
const router = express.Router();

const Comment = require('../Model/Comment');

// @route GET api/comments/getMovieComments
// @desc search for comments by its movieId, grab comments with authors' names,
//       emails, avatar
// @access Public
router.get('/getMovieComments', (req, res) => {
  Comment.find({movie: req.body.id})
    .populate('user', 'firstName lastName email avatar')
    .then(comments => {
       return res.status(200).json(comments);
   })
   .catch(err => {
       console.log(err);
       return res.status(401).send(err);
   });
});

// @route GET api/comments/getUserComments
// @desc search for comments by its movieId, grab comments with movie titles
// @access Public
router.get('/getUserComments', (req, res) => {
  Comment.find({user: req.body.id})
    .populate('movie', 'title')
    .then(comments => {
       return res.status(200).json(comments);
   })
   .catch(err => {
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
    return res.status(200).json({ Msg: 'Success', newComment: newComment });
});
module.exports = router;