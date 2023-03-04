var express = require("express");
var app = express();
var mangoose = require("mongoose");
var cors = require("cors");
var athuRoute = require("./Routers/auth");
var userRoute = require("./Routers/user");
var productRoute = require("./Routers/product");
var cartRoute = require("./Routers/cart");
var orderRoute = require("./Routers/order");
var stripRoute = require("./Routers/Strip");

mangoose.connect("mongodb://localhost:27017", (err, res) => {
  if (!err) {
    console.log("connection established");
  }
});

app.use(cors());
app.use(express.json());

app.use("/api/athu/", athuRoute);
app.use("/api/user/", userRoute);
app.use("/api/product/", productRoute);
app.use("/api/cart/", cartRoute);
app.use("/api/order/", orderRoute);
app.use("api/strip/", stripRoute);

app.listen(5001, () => {
  console.log("server is runing at port 5001");
});
