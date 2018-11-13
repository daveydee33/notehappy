const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Item = mongoose.model('items');

module.exports = app => {
  app.post('/api/items/', requireLogin, (req, res) => {
    const { title, body, tags } = req.body;

    const item = new Item({
      title,
      body,
      tags: tags.split(',').map(tag => tag.trim()),
      _user: req.user.id,
      dateCreated: Date.now(),
    });

    // Do something with the received data (or error check it first).
    // res.send(item);
  });
};
