const express = require('express');
const router = express.Router();
const User = require('../Model/User');

// @route   GET api/user/:id
// @desc    grab a user by its id from DB
// @access  Public
router.get('/:id', (req, res) => {
	var conditions = {_id: req.params.id};
    User.findById(conditions).then(result => {
        return res.status(200).json({
			firstName: result.firstName,
			lastName: result.lastName,
			avatar: result.avatar,
			history: result.history,
			favorites: result.favorites
		});
      })
      .catch(err => {
        console.err(err);
        return res.status(401).json(err);
      });
  });

// @route PUT api/user/saveToHistory
// @desc save a movie to the user's history
// @access Public
router.put('/saveToHistory', (req, res) => {
	User.findById(req.body.userID)
	.then(user => {
		if(user.history.length >= 20) {
			user.history.pop();
		}
		if(user.history.indexOf(req.body.movieID) > -1) {
			user.history.splice(user.history.indexOf(req.body.movieID), 1);
	    	user.history.unshift(req.body.movieID);
	    }
	    else {
	    	user.history.unshift(req.body.movieID);
	    }
	    user.save();
	    return res.status(200).json({ Msg: 'Success' });
	})
    .catch(err => {
    	console.log(err);
        return res.status(401).send(err);
	});
});

// @route PUT api/user/addToFavorites
// @desc save a movie to the user's favorites
// @access Public
router.put('/addToFavorites', (req, res) => {
	User.findById(req.body.userID)
	.then(user => {
		if(user.favorites.indexOf(req.body.movieID) < 0) {
			user.favorites.push(req.body.movieID);
			user.save();
			return res.status(200).json({ Msg: 'Success' });
		}
		else {
			return res.status(200).json({ Msg: 'Already existed in user\'s favorites' });
	    }
	})
	.catch(err => {
		console.log(err);
		return res.status(401).send(err);
	});
});

// @route DELETE api/user/removeFromFavorites
// @desc remove a movie frome the user's favorites
// @access Public
router.delete("/removeFromFavorites", (req, res) => {
	User.findById(req.body.userID)
	.then(user => {
		if(user.favorites.indexOf(req.body.movieID) > -1) {
			user.favorites.splice(user.favorites.indexOf(req.body.movieID), 1);
			user.save();
			return res.status(200).json({ Msg: 'Success' });
		}
		else {
			return res.status(400).send('This movie is not in user\'s favorites');
		}
	})
	.catch(err => {
		console.log(err);
		return res.status(401).send(err);
	});
});

module.exports = router;