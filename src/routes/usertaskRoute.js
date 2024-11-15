const express = require("express");
const router = express.Router();
const usertaskController = require("../controlles/usertaskController");

router.post("/add", usertaskController.addUsertask);

module.exports = router;