const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const authRoutes = require('./Controller/auth');
const movieRoutes = require('./Controller/movie');
const commentRoutes = require('./Controller/comment');
const userRoutes = require('./Controller/user');

const app = express();

// Database Configuration
const MONGO_URI = require('./config/keys').MONGO_URI;
mongoose.connect(MONGO_URI, { useNewUrlParser: true }, err => {
  if (err) console.error(err);
  else console.log('MongoDB Connected!');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

// Passport Config
const configurePassport = require('./config/passport');
configurePassport(passport);

// Router
app.get('/', (req, res) => {
  res.json({ Msg: 'Hello World!' });
});

app.use('/api/movies', movieRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server is live!');
});
