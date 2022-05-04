const http = require("http");
const app = require("./main.route");
const connectToDB = require("./DBConnection/mongoDB");
const PORT = 9009;

http.createServer(app).listen(PORT, () => {
  new connectToDB();

  console.log(`Server is running on port no ${PORT}`);
});
