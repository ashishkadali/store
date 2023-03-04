const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
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
          require: true,
        },

        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],

    amount: {
      type: Number,
      require: true,
    },

    address: {
      type: Object,
      require: true,
    },

    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
