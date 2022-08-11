const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      // required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    avatarImg: {
      type: String,
    },
    OTP: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
    },
    isVerify: {
      type: Boolean,
    },
    mainOTP: {
      type: String,
    },
    verifiedToken: {
      type: String,
    },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "products" }],
  },
  { timestamps: true }
);

const userModel = mongoose.model("skintriumphadmins", userSchema);
module.exports = userModel;
