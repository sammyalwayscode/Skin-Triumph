const express = require("express");
const router = express.Router();
const { createOrder, getOrdered } = require("../controller/orderedController");

router.route("/").get(getOrdered);
router.route("/newshipping/order").post(createOrder);

module.exports = router;
