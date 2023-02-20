var express = require("express");
var path = require("path");
var app = express();
var mangoose = require("mongoose");
var cors = require("cors");

mangoose.connect("mongodb://localhost:27017", (err, res) => {
  if (!err) {
    console.log("connection established");
  }
});

app.use(cors());
app.use(express.json());

app.use("", require(path.join(__dirname, "./Routers/router")));
app.use("/register", require(path.join(__dirname, "./Routers/router")));

app.listen(5001, () => {
  console.log("server is runing at port 5001");
});
