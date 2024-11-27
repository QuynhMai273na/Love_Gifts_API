const express = require("express");
const router = express.Router();
const partnerController = require("../controllers/partnerController");

//Route to get all cart items for a partner
/**
 * @swagger
 * tags:
 *   name: Partner
 *   description: Manage partner-specific data
 */

/**
 * @swagger
 * /api/partner/cart/{partnerEmail}:
 *   get:
 *     summary: Retrieve a partner's cart using their email
 *     tags: [Partner]
 *     parameters:
 *       - in: path
 *         name: partnerEmail
 *         required: true
 *         schema:
 *           type: string
 *         description: Partner's email address
 *     responses:
 *       200:
 *         description: Successfully retrieved partner's cart
 *       500:
 *         description: Internal server error
 */

router.get("/cart/:partnerEmail", partnerController.getPartnerCart);

//Route to get all tasks for a partner
/**
 * @swagger
 * /api/partner/tasks/{partnerEmail}:
 *   get:
 *     summary: Retrieve a partner's tasks using their email
 *     tags: [Partner]
 *     parameters:
 *       - in: path
 *         name: partnerEmail
 *         required: true
 *         schema:
 *           type: string
 *         description: Partner's email address
 *     responses:
 *       200:
 *         description: Successfully retrieved partner's tasks
 *       500:
 *         description: Internal server error
 */

router.get("/tasks/:partnerEmail", partnerController.getPartnerTasks);

module.exports = router;