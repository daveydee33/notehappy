const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    accessToken => {
      console.log(accessToken);
    },
  ),
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);

app.get('/auth/google/callback', (req, res) => {
  // TESTING that we can make it this far.
  // Need to add the configurations in the Google developer console to allow the development and production domains
  console.log('Redirect successful to callback URL');
  res.json('Redirect successful to the callback URL!');
});

const PORT = process.env.PORT || 5000; // PORT value set when deployed on Heroku.
app.listen(PORT);
