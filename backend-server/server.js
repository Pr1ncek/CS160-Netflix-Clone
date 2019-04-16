const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport')
const movieRoutes = require('./Routes/routes');
const authRoutes = require('./Controller/auth')

// Database Configuration
const MONGO_URI = require('./config/keys').MONGO_URI;
mongoose.connect(MONGO_URI, { useNewUrlParser: true }, err => {
  if (err) console.error(err);
  else console.log('MongoDB Connected!');
});

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize())

// Passport Config
const configurePassport = require('./config/passport');
configurePassport(passport)

// Router
app.get('/', (req, res) => {
  res.json({ Msg: 'Hello World!' });
});

app.use("/movie", movieRoutes);
app.use('/api/auth',  authRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server is live!');
});
