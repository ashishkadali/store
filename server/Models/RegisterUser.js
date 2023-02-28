const mongoose = require("mongoose");

let RegisterUser = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },

    email: {
      type: String,
      require: true,
      unique: true,
    },

    password: {
      type: String,
      require: true,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", RegisterUser);
