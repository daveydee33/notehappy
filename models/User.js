const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
});

mongoose.model('users', userSchema);
// mongoose.model will tell Mongoose to create (or retrieve) a Collection named 'users' in the database.  It won't overwrite collections if it already exists.
