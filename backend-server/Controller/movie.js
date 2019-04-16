//Controller
const Movie = require('../Model/movie');
const RATING_AVERAGE_VALUE = 8.0;

//Route: http://localhost:5000/movie/
exports.getTopTenMovies = (req, res) => {
    Movie.find({vote_average: {$gt: RATING_AVERAGE_VALUE}}).limit(10).then(result => {
        res.send(result);
        return res.status(200).send();
    }).catch(err => {
        console.log(err);
        return res.status(401).send();
    });
};

//Route: http://localhost:5000/movie/search
exports.searchMovie = (req, res) => {
    //ADD MORE OPTIONS FOR SEARCHING MOVIE SUCH AS: Actor, etc..
    Movie.find({$or: [{title: req.body.title}, { keywords: { $regex: '.*' + req.body.title + '.*' } }]})
    .then(result => {
        return res.status(200).send(result);
    }).catch(err => {
        console.log(err);
        return res.status(401).send(err);
    });
};

//Route: http://localhost:5000/movie/"ID NUMBER HERE"
exports.getMovieID = (req, res) => {
    Movie.findById(req.body.id).then(result => {
        return res.status(200).send(result);
    }).catch(err => {
        console.log(err);
        return res.status(401).send(err);
    });
};