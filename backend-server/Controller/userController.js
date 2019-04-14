 //Controller
 const User = require('../Model/user');
 
 //Route: http://localhost:5000/user/:userID
 exports.getUserPage = (req, res) => {
     User.findById(req.params.userID).then(result => {
         res.json(result);
         //res.json({ Msg: 'Hello World!' });
         return res.status(200).send();
     }).catch(err => {
         console.log(err);
         return res.status(401).send();
     });
 }
 
 