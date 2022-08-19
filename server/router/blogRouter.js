const express = require("express");
const router = express.Router();
const {
  getBlogs,
  createBlog,
  getBlog,
} = require("../controller/blogController");
const { blogUpload } = require("../config/multer");

router.route("/").get(getBlogs);
router.route("/:id").get(getBlog);
router.route("/create").post(blogUpload, createBlog);

module.exports = router;
