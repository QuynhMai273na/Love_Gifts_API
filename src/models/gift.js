const mongoose = require("../configuration/dbConfig");

const giftSchema = new mongoose.Schema({
    name: String,
    picture: String,
    type: String,
    point: Number
});
const Gift = mongoose.model("Gift", giftSchema);

module.exports=Gift;