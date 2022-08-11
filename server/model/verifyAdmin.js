const mongoose = require("mongoose");
const verifyAdmin = mongoose.Schema(
  {
    token: {
      type: String,
    },

    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "skintriumphadmins",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("adminVerified", verifyAdmin);
