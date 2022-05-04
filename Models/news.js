const mongoose = require("mongoose");

const news = new mongoose.Schema({
  source: { type: Object },
  author: { type: String },
  title: { type: String },
  description: { type: String },
  url: { type: String },
  urlToTmage: { type: String },
  publishedAt: { type: String },
  content: { type: String },
});

module.exports = mongoose.model("news", news);
