//Routes
const express = require("express");
const movieController = require("../controller/movie");
const router = express.Router();

//Routes for handling Receiving
router.route("/").get(movieController.getTopTenMovies);
router.route("/search").get(movieController.searchMovie);
router.route("/:id").get(movieController.getMovieID);

module.exports = router;
