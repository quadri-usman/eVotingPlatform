var mongoose = require("mongoose"),
  passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
  fullname: String,
  username: String,
  email: String,
  provider: String,
  password: String,
  salt: String,
});
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);
