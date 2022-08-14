const express = require("express");
const router = express.Router();
const { adminUpload } = require("../config/multer");
const {
  signUpAdmin,
  adminVerify,
  signInAdmin,
} = require("../controller/adminController");

router.route("/signup").post(adminUpload, signUpAdmin);
router.route("/signin").post(signInAdmin);
router.route("/:id/:token").post(adminVerify);

module.exports = router;
