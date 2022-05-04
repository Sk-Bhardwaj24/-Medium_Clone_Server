const express = require("express");
const app = express();
var cors = require("cors");
const blogController = require("../Controllers/bloglistcontroller");
app.use(cors());
app.get("/all", blogController.getallblogs);

module.exports = app;
