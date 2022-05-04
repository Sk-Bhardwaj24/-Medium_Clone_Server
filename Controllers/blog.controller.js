const BLOGModel = require("../Models/blog.model");

const { default: mongoose } = require("mongoose");

async function blogData(req, res, next) {
  try {
    const body = req.body;
    console.log(body);
    const response = await BLOGModel.insertMany([body]);

    res.send(response);
  } catch (error) {
    res.send(error);
  }
}
async function GetAllData(req, res, next) {
  try {
    // console.log(req);
    let usermail = req.params.email;
    console.log(usermail);
    if (usermail == undefined) {
      console.log(usermail);
      res.status(404).send("Not found");
      //   return;
    } else {
      let response = await BLOGModel.find({ userEmail: usermail });
      console.log(response);
      res.json(response);
    }
  } catch (error) {
    res.send(error);
  }
}

async function deleteBolog(req, res, next) {
  try {
    let userId = req.params._id;
    console.log(userId);
    // 6272cc311ff6362f688c5a92
    let response = await BLOGModel.deleteOne({ _id: userId });
    console.log(response);
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  blogData,
  GetAllData,
  deleteBolog,
};
