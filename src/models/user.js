const mongoose = require("../configuration/dbConfig");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    sex: { type: String, default: "" },     
    point: { type: Number, default: 0 },
    partner: { type: String, default: "" }  
});
const User = mongoose.model("User", userSchema);

module.exports=User;