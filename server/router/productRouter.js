const express = require("express");
const router = express.Router();
const multer = require("../config/multer");
const {
  getAllProducts,
  createProduct,
} = require("../controller/productController");

router.route("/").get(getAllProducts);
router.route("/uploadProduct").post(multer, createProduct);

module.exports = router;
