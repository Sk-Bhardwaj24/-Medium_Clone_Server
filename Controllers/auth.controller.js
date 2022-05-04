const AuthModel = require("../Models/userAuth");

const { default: mongoose } = require("mongoose");
async function register(req, res, next) {
  try {
    let ser = req.body.email;
    let searchobj = {};
    searchobj["email"] = ser;
    let response = await AuthModel.find(searchobj);
    console.log(response);
    if (response.length == 0) {
      let response2 = await AuthModel.insertMany([req.body]);
      res.status(200).send(true);
      return;
    } else {
      res.status(200).send(false);
      return;
    }

    // console.log(response);
  } catch (error) {
    res.status(500).json(error);
  }
  // res.send("hallo");
}

async function Signin(req, res, next) {
  //fetch info from request body
  try {
    let ser = req.body.email;
    console.log(ser);
    let searchobj = {};
    searchobj["email"] = ser;
    let response = await AuthModel.find(searchobj);
    console.log(response);
    if (response.length === 0) {
      res.status(200).send(false);
      return;
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.json(error);
  }
}

module.exports = {
  register,
  Signin,
};
