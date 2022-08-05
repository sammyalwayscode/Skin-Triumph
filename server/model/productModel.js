const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
    },
    productDescription: {
      type: String,
    },
    shortDescription: {
      type: String,
    },
    price: {
      type: Number,
    },
    category: {
      type: String,
    },
    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productSchema);
