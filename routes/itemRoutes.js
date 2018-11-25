const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Item = mongoose.model('items');

module.exports = app => {
  // @route   GET api/item/:id
  // @desc    Get single item by ID
  // @access  Private
  app.get('/api/item/:id', requireLogin, async (req, res) => {
    const id = req.params.id;

    const item = await Item.findOne({
      _id: id,
      _user: req.user.id,
    });
    // TODO: maybe create a condition to return something else if the item found, but user not the owner, etc?

    res.send(item);
  });

  // @route   DELETE api/item/:id
  // @desc    Delete single item by ID
  // @access  Private
  app.delete('/api/item/:id', requireLogin, async (req, res) => {
    const id = req.params.id;

    const item = await Item.findOneAndDelete({
      _id: id,
      _user: req.user.id,
    });
    // TODO: maybe create a condition to return something else if the item found, but user not the owner, etc?

    res.send(item);
  });

  app.get('/api/items', requireLogin, async (req, res) => {
    const items = await Item.find({
      _user: req.user.id,
    });

    res.send(items);
  });

  app.post('/api/items/', requireLogin, async (req, res) => {
    const { title, body } = req.body;
    let { tags } = req.body;

    if (tags) {
      tags = tags.split(',').map(tag => tag.trim());
    }

    const item = new Item({
      title,
      body,
      tags,
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
