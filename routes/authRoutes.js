const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    }),
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/items');
    },
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  // Get current logged in user data
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  // // TEST private route
  // app.get('/api/test/priv', requireLogin, (req, res) => {
  //   res.send(req.user);
  // });

  // // TEST pub route
  // app.get('/api/test/pub', (req, res) => {
  //   res.send(req.user);
  // });
};
