const express = require("express");
const router = express.Router();
const { getShipping, createShip } = require("../controller/shippingController");

router.route("/").get(getShipping);
router.route("/newshipping").post(createShip);

module.exports = router;
