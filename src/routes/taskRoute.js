const express = require("express");
const taskController = require("../controlles/taskController");
const router = express.Router();

router.get("/", taskController.getAllTasks);

module.exports = router;