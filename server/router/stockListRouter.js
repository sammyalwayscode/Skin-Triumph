const express = require("express");
const router = express.Router();
const {
  getAllStocklist,
  createStore,
} = require("../controller/stocklistController");

router.route("/").get(getAllStocklist);
router.route("/newstore").post(createStore);

module.exports = router;
