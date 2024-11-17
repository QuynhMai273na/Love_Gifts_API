const mongoose = require("../configuration/dbConfig");

const cartSchema = new mongoose.Schema({
    user: String,
    gift: {
        type: mongoose.Schema.Types.ObjectId, //giúp chúng ta có thể lưu ID của Gift và sử dụng .populate() để lấy thông tin chi tiết từ bảng Gift.
        ref: "Gift",
    },
    status: { type: String, default: "pending" },
});
const Cart = mongoose.model("Cart", cartSchema);

module.exports=Cart;