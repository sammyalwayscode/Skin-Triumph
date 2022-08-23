const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
  email: {
    type: String,
  },
  orderOTP: {
    type: String,
  },
  delivered: {
    type: Boolean,
    default: false,
  },
  orderDetail: {
    type: Array,
  },
});

const orderedModel = mongoose.model("orderedUsers", orderSchema);
module.exports = orderedModel;
