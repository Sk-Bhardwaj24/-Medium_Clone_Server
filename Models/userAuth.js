const mongoose = require("mongoose");

const userAuth = new mongoose.Schema({
  email: { type: String },
  familyName: { type: String },
  givenName: { type: String },
  googleId: { type: String },
  imageUrl: { type: String },
  name: { type: String },
});

module.exports = mongoose.model("user", userAuth);
