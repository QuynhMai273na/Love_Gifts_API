const express = require("express");
const taskController = require("../controllers/taskController");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Task
 *   description: Manage tasks
 */

/**
 * @swagger
 * /api/task:
 *   get:
 *     summary: Retrieve all tasks
 *     tags: [Task]
 *     responses:
 *       200:
 *         description: Successfully retrieved list of tasks
 *       500:
 *         description: Internal server error
 */

router.get("/", taskController.getAllTasks);

module.exports = router;