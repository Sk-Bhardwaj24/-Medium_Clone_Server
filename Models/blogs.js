const mongoose = require("mongoose");

const blogs = new mongoose.Schema({
  author: { type: String },
  title: { type: String },
  description: { type: String },
  url: { type: String },
  source: { type: String },
  image: { type: String },
  category: { type: String },
  language: { type: String },
  country: { type: String },
  published_at: { type: String },
});

module.exports = mongoose.model("blogs", blogs);
