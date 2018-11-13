const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
  title: String,
  body: String,
  // tags: [String],
  // examples: [ExampleSchema],
  // owner: User,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }, // we could just call this 'ownedBy' or anything we want, but the underscore convention indicates that it's a  'reference field' eg, has relationship with another model.
  dateCreated: { Date },
  dateModified: { Date },
});

mongoose.model('items', itemSchema);
// mongoose.model will tell Mongoose to create (or retrieve) a Collection named 'items' in the database.  It won't overwrite a collection if it already exists.
