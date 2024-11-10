const mongoose = require("../configuration/dbConfig");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    sex: String,
    point: Number,
    partner: String
});
const User = mongoose.model("User", userSchema);

module.exports=User;