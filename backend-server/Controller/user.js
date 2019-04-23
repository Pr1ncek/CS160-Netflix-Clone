const express = require('express');
const router = express.Router();
const User = require('../Model/User');

router.put("/:id/update", (req, res) => {
    var conditions = {_id: req.params.id};

    User.update(conditions, req.body).then(result => {
        if(!result){
            return res.status(404).send("User not found!");
        }
        return res.status(200).send("User Information has been updated!");
    }).catch(err => {
        console.log(err);
        return res.status(500);
    });
});

module.exports = router;