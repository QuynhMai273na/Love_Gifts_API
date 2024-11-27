const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Manage user accounts
 */

/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               sex:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully created a new user
 *       500:
 *         description: Internal server error
 */
router.post("/", userController.createUser);
/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Login a user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       500:
 *         description: Internal server error
 */

router.post("/login", userController.loginUser);
/**
 * @swagger
 * /api/user/{userId}:
 *   get:
 *     summary: Retrieve a user by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: Successfully retrieved user
 *       500:
 *         description: Internal server error
 */
router.get("/:userId", userController.getUser);
router.put("/partner/:userId", userController.updateUserPartner);

module.exports = router;