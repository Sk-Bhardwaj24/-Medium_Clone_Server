const mongoose = require("mongoose");

class Mongo {
  constructor() {
    this.createMongoConnection();
  }

  createMongoConnection() {
    mongoose.connect(
      "mongodb+srv://SKbhardwaj:Medium1234@cluster0.knqgr.mongodb.net/masai?retryWrites=true&w=majority"
    );
    mongoose.connection.once("open", () => {
      console.log("MongoDB is connected");
    });
    mongoose.connection.on("error", () => {
      console.log("Error occured in mongoDB connection");
    });
  }
}

module.exports = Mongo;
