const mongoose = require("../configuration/dbConfig");

const cartSchema = new mongoose.Schema({
    user: String,
    gift: String,
    status: String
});
const Cart = mongoose.model("Cart", cartSchema);

module.exports=Cart;