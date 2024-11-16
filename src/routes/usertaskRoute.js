const express = require("express");
const router = express.Router();
const usertaskController = require("../controllers/usertaskController");

router.post("/add", usertaskController.addUsertask);
router.get("/:userId", usertaskController.getUsertask);
router.put("/complete/:usertaskId", usertaskController.completeUserTask);

module.exports = router;