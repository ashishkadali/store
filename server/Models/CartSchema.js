const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    // every user have on cart only so we are placing order based on UserID
    userId: {
      type: String,
      require: true,
    },

    products: [
      {
        productId: {
          type: String,
        },

        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
