const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json([]));
app.use(PATH.USER, userRoute);
app.use(PATH.AUTH, authRoute);
module.exports = app;
