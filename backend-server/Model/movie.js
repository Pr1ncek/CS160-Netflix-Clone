const mongoose = require('mongoose');

// Create Schema
const movieSchema = new mongoose.Schema({
  budget: {type: Number},
  genres: {type: String},
  homepage: {type: String},
  keywords: {type: String},
  title: {type: String},
  overview: {type: String},
  release_date: {type: String},
  revenue: {type: Number},
  runtime: {type: Number},
  vote_average: {type: Number},
  vote_count: {type: Number}
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;