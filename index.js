const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const port = 5000; // PORT value will be set when deployed on Heroku.
app.listen(port);
