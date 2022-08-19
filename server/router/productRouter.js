const express = require("express");
const router = express.Router();
const { upload } = require("../config/multer");
const {
  getAllProducts,
  createProduct,
  getOneProduct,
} = require("../controller/productController");

router.route("/").get(getAllProducts);
router.route("/:id").get(getOneProduct);
router.route("/uploadProduct").post(upload, createProduct);

module.exports = router;
