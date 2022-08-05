const mongoose = require("mongoose");
// const MONGOATLAS_URI= ""
const MONGOCOMPASS_URI = "mongodb://localhost/skintriumph";

mongoose.connect(MONGOCOMPASS_URI);
mongoose.connection
  .on("open", () => {
    console.log("Connected to DB🏬");
  })
  .once("error", () => {
    console.log("Failed to Connect to DB ❌❌❌");
  });

module.exports = mongoose;
