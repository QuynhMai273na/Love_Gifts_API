const express = require("express");
const cartController = require("../controllers/cartController");
const router = express.Router();

router.post("/add", cartController.addToCart);
router.get("/:user", cartController.getCartByUser);
router.delete("/:id", cartController.removeFromCart);
router.post('/receive/:cartId', cartController.receiveGift);

module.exports = router;