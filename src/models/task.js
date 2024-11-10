const mongoose = require("../configuration/dbConfig");

const taskSchema = new mongoose.Schema({
    name: String,
    point: Number
});
const Task = mongoose.model("Task", taskSchema);

module.exports=Task;