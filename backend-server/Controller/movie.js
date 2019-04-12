 //Controller
const Movie = require('../Model/movie');
const RATING_AVERAGE_VALUE = 8.3;

//Route: http://localhost:5000/movie/
exports.getTopMovies = (req, res) => {
    Movie.find({vote_average: {$gt: RATING_AVERAGE_VALUE}}).then(result => {
        res.send(result);
        return res.status(200).send();
    }).catch(err => {
        console.log(err);
        return res.status(401).send();
    });
};

//Route: http://localhost:5000/movie/search
exports.searchMovie = (req, res) => {
    Movie.find({$or: [{title: req.body.title}, { keywords: { $regex: '.*' + req.body.title + '.*' } }]})
    .then(result => {
        return res.status(200).send(result);
    }).catch(err => {
        console.log(err);
        return res.status(401).send(err);
    });
};

//Route: http://localhost:5000/movie/:movieID
exports.getMoviePage = (req, res) => {
    Movie.findById(req.params.movieID}).then(result => {
        res.json(result);
        //res.json({ Msg: 'Hello World!' });
        return res.status(200).send();
    }).catch(err => {
        console.log(err);
        return res.status(401).send();
    });
}

