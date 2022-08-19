const mongoose = require("mongoose");
const blogSchema = mongoose.Schema(
  {
    blogTitle: {
      type: String,
    },
    blogShotDes: {
      type: String,
    },
    descPragraphOne: {
      type: String,
    },
    descPragraphTwo: {
      type: String,
    },
    descPragraphThree: {
      type: String,
    },
    blogImg: {
      type: String,
    },
    blogImgID: {
      type: String,
    },
  },
  { timestamps: true }
);

const blogModel = mongoose.model("skinTriumphBlogs", blogSchema);
module.exports = blogModel;
