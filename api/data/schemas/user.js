let mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
  userId: String,
  userFirstName: String,
  userLastName: String,
  userEmail: String,
  userPassword: String,
  userType: String,
});

module.exports = UserSchema;
