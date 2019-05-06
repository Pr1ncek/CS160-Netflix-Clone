const express = require('express');
const router = express.Router();
const Movie = require('../Model/movie');
const RATING_AVERAGE_VALUE = 8.0;

// @route   GET api/movies/topmovies
// @desc    search for a movie
// @access  Public
router.get('/topmovies', (req, res) => {
  Movie.find({ vote_average: { $gt: RATING_AVERAGE_VALUE } })
    .limit(12)
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => {
      console.err(err);
      return res.status(401).send(err);
    });
});


// @route   GET api/movies/topactionmovies
// @desc    search for top action movies
// @access  Public
router.get('/topactionmovies', (req, res) => {
  Movie.find({ keywords: { $regex: '.*' + "action" + '.*' }  })
    .limit(4)
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => {
      console.err(err);
      return res.status(401).send(err);
    });
});

// @route   GET api/movies/topcomedymovies
// @desc    search for top comedy movies
// @access  Public
router.get('/topcomedymovies', (req, res) => {
  Movie.find({ keywords: { $regex: '.*' + "comedy" + '.*' }  })
    .limit(4)
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => {
      console.err(err);
      return res.status(401).send(err);
    });
});

// @route   GET api/movies/tophorrormovies
// @desc    search for top horror movies
// @access  Public
router.get('/tophorrormovies', (req, res) => {
  Movie.find({ keywords: { $regex: '.*' + "horror" + '.*' }  })
    .limit(4)
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => {
      console.err(err);
      return res.status(401).send(err);
    });
});

//TESTING!

// @route   GET api/movies/search
// @desc    search for a movie
// @access  Public
router.get('/search', (req, res) => {
  //ADD MORE OPTIONS FOR SEARCHING MOVIE SUCH AS: Actor, etc..
  var keyword = req.query.keyword
  Movie.find({ $or:[{title: keyword}, {keywords:{$regex: '.*' + keyword + '.*'}}]})
    .limit(50)
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
