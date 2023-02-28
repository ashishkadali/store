const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    productname: {
      type: String,
      require: true,
      unique: true,
    },

    description: {
      type: String,
      require: true,
    },

    img: {
      type: String,
      require: true,
    },

    categories: {
      type: Array,
    },

    size: {
      type: String,
    },

    Price: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
