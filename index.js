const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport'); // make sure to use this file, but we're not exporting anything from it, so we don't need to assign to any variable.

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true },
);

const app = express();

require('./routes/authRoutes')(app); // See: "Server Structure Refactor".  The "(app)" says to immediately invoke the previous with "app"

const PORT = process.env.PORT || 5000; // PORT value set when deployed on Heroku.
app.listen(PORT);
