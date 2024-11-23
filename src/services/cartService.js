const Cart = require('../models/cart');

class CartService {
    async addToCart (user, giftId){
        const newCartItem = new Cart({user, gift: giftId});
        return await newCartItem.save();
    }

    async getCartByUser(user){
        return await Cart.find({user, status: "pending"}).populate("gift");
    }

    async getReceivedCartByUser(user){
        return await Cart.find({user, status: "received"}).populate("gift");
    }

    async removeFromCart (cartId) {
        try {
            return await Cart.findByIdAndDelete(cartId);
        } catch (error) {
            console.error("Error removing cart item:", error.message);
            throw error;
        }
    }

    async getCartById(cartId) {
        try {
            const cartItem = await Cart.findById(cartId).populate("gift");
            return cartItem;
        }catch(error){
            console.error("Error fetching cart item by Id: ", error);
            throw error;
        }
    }
}
module.exports = new CartService();