const mongoose = require("mongoose");
const stocklistSchema = mongoose.Schema({
  office: {
    type: String,
  },
  phoneNo: {
    type: String,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
  },
  hours: {
    type: String,
  },
});

const stocklistModel = mongoose.model("stocklist", stocklistSchema);
module.exports = stocklistModel;
