const express = require("express");
const router = express.Router();
const usertaskController = require("../controllers/usertaskController");

/**
 * @swagger
 * tags:
 *   name: UserTask
 *   description: Manage user tasks
 */

/**
 * @swagger
 * /api/usertask/add:
 *   post:
 *     summary: Assign a task to a user
 *     tags: [UserTask]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The ID of the user
 *               taskId:
 *                 type: string
 *                 description: The ID of the task
 *     responses:
 *       200:
 *         description: Task assigned to user successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: string
 *                 taskId:
 *                   type: string
 *                 status:
 *                   type: string
 *                   description: Status of the user task
 *       500:
 *         description: Internal server error
 */
router.post("/add", usertaskController.addUsertask);
/**
 * @swagger
 * /api/usertask/{userId}:
 *   get:
 *     summary: Retrieve all tasks assigned to a user
 *     tags: [UserTask]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user
 *     responses:
 *       200:
 *         description: Successfully retrieved user tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   userId:
 *                     type: string
 *                   taskId:
 *                     type: string
 *                   status:
 *                     type: string
 *       500:
 *         description: Internal server error
 */

router.get("/:userId", usertaskController.getUsertask);
/**
 * @swagger
 * /api/usertask/complete/{usertaskId}:
 *   put:
 *     summary: Mark a user task as complete
 *     tags: [UserTask]
 *     parameters:
 *       - in: path
 *         name: usertaskId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user task to complete
 *     responses:
 *       200:
 *         description: Task marked as completed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 usertaskId:
 *                   type: string
 *                 status:
 *                   type: string
 *                   description: Status of the user task after completion
 *       500:
 *         description: Internal server error
 */

router.put("/complete/:usertaskId", usertaskController.completeUserTask);

module.exports = router;