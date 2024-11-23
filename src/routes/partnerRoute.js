const express = require("express");
const router = express.Router();
const partnerController = require("../controllers/partnerController");

//Route to get all cart items for a partner
router.get("/cart/:partnerEmail", partnerController.getPartnerCart);

//Route to get all tasks for a partner
router.get("/tasks/:partnerEmail", partnerController.getPartnerTasks);

module.exports = router;