const bloglistModel = require("../Models/blogs");

const { default: mongoose } = require("mongoose");
async function getallblogs(req, res, next) {
  //fetch info from request body
  try {
    let response = await bloglistModel.find({});
    res.send(response);
  } catch (error) {
    res.json(error);
  }
}
module.exports = {
  getallblogs,
};
