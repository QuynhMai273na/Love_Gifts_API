const express = require("express");
const giftController = require("../controllers/giftController");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Gift
 *   description: Manage available gifts
 */

/**
 * @swagger
 * /api/gift:
 *   get:
 *     summary: Retrieve all available gifts
 *     tags: [Gift]
 *     responses:
 *       200:
 *         description: Successfully retrieved list of gifts
 *       500:
 *         description: Internal server error
 */
router.get("/", giftController.getAllGifts);

module.exports = router;
