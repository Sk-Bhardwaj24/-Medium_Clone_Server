const newslistModel = require("../Models/news");

const { default: mongoose } = require("mongoose");
async function getallnews(req, res, next) {
  //fetch info from request body
  try {
    let response = await newslistModel.find({});
    res.send(response);
  } catch (error) {
    res.json(error);
  }
}
module.exports = {
  getallnews,
};
