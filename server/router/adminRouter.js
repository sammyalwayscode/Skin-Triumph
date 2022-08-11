const express = require("express");
const router = express.Router();
const { adminUpload } = require("../config/multer");
const { signUpAdmin, adminVerify } = require("../controller/adminController");

router.route("/signup").post(adminUpload, signUpAdmin);
router.route("/:id/:token").post(adminVerify);

module.exports = router;
