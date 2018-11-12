const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport'); // make sure to use this file, but we're not exporting anything from it, so we don't need to assign to any variable.

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true },
);

const app = express();

app.use(bodyParser.json()); // Needed for POST, PUT, PATCH requests.  Express by default won't parse the POST request payload. to be available as the req.body property.
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey],
  }),
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // See: "Server Structure Refactor".  The "(app)" says to immediately invoke the previous with "app".  The 'authRoutes' exports a function.  So this code here immediately calls that function with the express 'app' object.

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000; // PORT value set when deployed on Heroku.
app.listen(PORT);
