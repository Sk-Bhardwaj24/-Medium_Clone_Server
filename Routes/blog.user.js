const express = require("express");
const app = express();
var cors = require("cors");
const authController = require("../Controllers/blog.controller");
app.use(cors());
app.post("/post", authController.blogData);
app.get("/getBlog/:email", authController.GetAllData);
app.delete("/deleteBlog/:_id", authController.deleteBolog);
// app.post("/signIn", authController.Signin);

module.exports = app;
