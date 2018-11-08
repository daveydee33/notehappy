const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id); // This is the Mongo ID, _not_ the Google ID
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true, // see: Fixing Heroku Proxy Issues
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // We already have a record for that profile ID
          done(null, existingUser); // Call the 'done' callback to tell Passport that we did what we wanted, and to continue with the authentication process.  Return 'null' errors, and the existingUser.
        } else {
          // No user record for this ID, we need to make a new record.
          new User({ googleId: profile.id })
            .save()
            .then(newUser => done(null, newUser));
        }
      });
    },
  ),
);
