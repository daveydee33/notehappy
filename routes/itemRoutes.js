const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Item = mongoose.model('items');

module.exports = app => {
  app.post('/api/items/', requireLogin, async (req, res) => {
    const { title, body, tags } = req.body;

    const item = new Item({
      title,
      body,
      tags: tags.split(',').map(tag => tag.trim()),
      _user: req.user.id,
      dateCreated: Date.now(),
    });

    // TODO: Validate data received first?

    try {
      const savedItem = await item.save();
      res.send(savedItem);
    } catch (err) {
      res.status(422).send({
        msg: 'Ouch! Something bad happened saving to the DB.',
        error: err,
      });
    }
  });
};
