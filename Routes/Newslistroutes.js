const express = require("express");
const app = express();
var cors = require("cors");
const newsController = require("../Controllers/newsController");
app.use(cors());
app.get("/all", newsController.getallnews);

module.exports = app;
