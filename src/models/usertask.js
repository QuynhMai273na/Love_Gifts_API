const mongoose = require("../configuration/dbConfig");

const usertaskSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    task: { type: mongoose.Schema.Types.ObjectId, ref: "Task" },
    status: String
});
const Usertask = mongoose.model("Usertask", usertaskSchema);

module.exports=Usertask;