const express = require("express");
const giftController = require("../controllers/giftController");
const router = express.Router();

router.get("/", giftController.getAllGifts);

module.exports = router;