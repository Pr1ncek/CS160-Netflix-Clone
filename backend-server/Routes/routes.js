//Routes
const express = require("express");
const movieController = require("../controller/movie");
const router = express.Router();

//Routes for handling Receiving
router.route("/").get(movieController.getTopMovies);
router.route("/search").get(movieController.searchMovie);


module.exports = router;
