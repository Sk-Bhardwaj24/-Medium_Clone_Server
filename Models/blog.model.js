const mongoose = require("mongoose");

const BlogSchemas = new mongoose.Schema({
  title: { type: String, required: true },
  story: { type: String, required: true },
  // author:{type:mongoose.Schema.Types.ObjectId,
  fileUpload: { type: String },
  userEmail: { type: String, required: true },
  // ref:"user"}
});

module.exports = mongoose.model("BlogSchemas", BlogSchemas);
