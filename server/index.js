var express = require("express");
var app = express();
var mangoose = require("mongoose");
var cors = require("cors");
var userAthu = require("./Routers/auth");
var userRoute = require("./Routers/user");

mangoose.connect("mongodb://localhost:27017", (err, res) => {
  if (!err) {
    console.log("connection established");
  }
});

app.use(cors());
app.use(express.json());

app;
app.use("/", userAthu);
app.use("/", userRoute);

app.listen(5001, () => {
  console.log("server is runing at port 5001");
});
