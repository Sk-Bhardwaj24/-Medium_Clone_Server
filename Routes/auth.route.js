const express = require("express");
const app = express();
var cors = require("cors");
const authController = require("../Controllers/auth.controller");
app.use(cors());
app.post("/signUp", authController.register);
app.post("/signIn", authController.Signin);

module.exports = app;
