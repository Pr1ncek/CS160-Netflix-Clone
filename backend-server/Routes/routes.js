//Routes
const express = require("express");
const movieController = require("../controller/movie");
const userController = require("../controller/userController")
const router = express.Router();

/*********************************
 * Routes for handling Receiving *
 *********************************/
// Movies
router.route("/").get(movieController.getTopMovies);
router.route("/search").get(movieController.searchMovie);
router.route("/:movieID").get(movieController.getMoviePage);

// Users
router.route("/user/:userID").get(userController.getUserPage);

module.exports = router;
