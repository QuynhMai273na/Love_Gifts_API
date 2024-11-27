const express = require("express");
const cartController = require("../controllers/cartController");
const router = express.Router();

/*
 * @swagger
 * tags:
 *   name: Cart
 *   description: Cart management for users
 */

/*
 * @swagger
 * /api/cart/add:
 *   post:
 *     summary: Add an item to the cart
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *               giftId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Item added to cart successfully
 *       500:
 *         description: Internal server error
 */
router.post("/add", cartController.addToCart);

/**
 * @swagger
 * /api/cart/{user}:
 *   get:
 *     summary: Retrieve cart items by user ID
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: user
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: Successfully retrieved cart items
 *       500:
 *         description: Internal server error
 */
router.get("/:user", cartController.getCartByUser);

/**
 * @swagger
 * /api/cart/{id}:
 *   delete:
 *     summary: Remove an item from the cart
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Cart item ID
 *     responses:
 *       200:
 *         description: Item removed from cart
 *       500:
 *         description: Internal server error
 */

router.delete("/:id", cartController.removeFromCart);

/**
 * @swagger
 * /api/cart/receive/{cartId}:
 *   post:
 *     summary: Mark a gift as received
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: cartId
 *         required: true
 *         schema:
 *           type: string
 *         description: Cart ID
 *     responses:
 *       200:
 *         description: Gift received successfully
 *       500:
 *         description: Internal server error
 */

router.post('/receive/:cartId', cartController.receiveGift);

/**
 * @swagger
 * /api/cart/received-gift/{user}:
 *   get:
 *     summary: Get received gifts for a user
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: user
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: Received gifts retrieved successfully
 *       500:
 *         description: Internal server error
 */

router.get("/received-gift/:user", cartController.getReceivedCartByUser);

module.exports = router;

