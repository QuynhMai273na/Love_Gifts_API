const cartService = require("../services/cartService");
const userService = require("../services/userService");
const giftService = require("../services/giftService");

class CartController {
  async addToCart(req, res) {
    try {
      const { user, giftId } = req.body;
      const cartItem = await cartService.addToCart(user, giftId);
      res.json(cartItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCartByUser(req, res) {
    try {
        const {user} = req.params;
        const cart = await cartService.getCartByUser(user);
        res.json(cart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async removeFromCart(req, res){
    try{
        const {id} = req.params;
        await cartService.removeFromCart(id);
        res.json({message: "Item removed from cart"});
    }catch(error){
        res.status(500).json({error: error.message});
    }
  }

  async receiveGift(req, res) {
    const {cartId} = req.params;
    try {
      // Lấy thông tin sản phẩm trong giỏ hàng
      const cartItem = await cartService.getCartById(cartId);
      if (!cartItem)
        return res.status(404).json({ message: "Cart item not found" });

      // Lấy thông tin người dùng từ cartItem
      const userId = cartItem.user; // Lấy userId từ cartItem
      const user = await userService.getUserById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const gift = cartItem.gift;
      if (!gift) return res.status(404).json({ message: "Gift not found" });

      // Kiểm tra điểm
      if (user.point < gift.point)
        return res
          .status(400)
          .json({ message: "You don't have enough points to receive this gift! Please do more tasks to gain points!" });

      // Trừ điểm
      user.point -= gift.point;
      await user.save();

      await cartService.removeFromCart(cartId);

      return res
        .status(200)
        .json({
          message: "Gift received successfully",
          remainingPoints: user.point,
        });
    }catch(error){
        res.status(500).json({error: error.message});
    };
  }
}
module.exports = new CartController();