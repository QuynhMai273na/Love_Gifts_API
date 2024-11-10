const mongoose = require("../configuration/dbConfig");

const usertaskSchema = new mongoose.Schema({
    user: String,
    task: String,
    status: String
});
const Usertask = mongoose.model("Usertask", usertaskSchema);

module.exports=Usertask;