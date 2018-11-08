const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    }),
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  // Test to see user data if logged in
  app.get('/auth/current_user', (req, res) => {
    res.send(req.user);
  });
};
