const express = require('express');
const router = express.Router();
const Movie = require('../Model/movie');
const RATING_AVERAGE_VALUE = 8.0;

// @route   GET api/movies/topmovies
// @desc    search for a movie
// @access  Public
router.get('/topmovies', (req, res) => {
  Movie.find({ vote_average: { $gt: RATING_AVERAGE_VALUE } })
    .limit(10)
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => {
      console.err(err);
      return res.status(401).send(err);
    });
});

// @route   GET api/movies/search
// @desc    search for a movie
// @access  Public
router.get('/search', (req, res) => {
  //ADD MORE OPTIONS FOR SEARCHING MOVIE SUCH AS: Actor, etc..
  const searchTerm = req.body.title;
  Movie.find({ $or: [{ title: searchTerm }, { keywords: { $regex: '.*' + searchTerm + '.*' } }] })
    .limit(25)
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => {
      console.err(err);
      return res.status(404).json(err);
    });
});

// @route   GET api/movies/searchbyid
// @desc    search for a movie by its id
// @access  Public
router.get('/searchbyid', (req, res) => {
  Movie.findById(req.body.id)
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => {
      console.err(err);
      return res.status(401).json(err);
    });
});
module.exports = router;
