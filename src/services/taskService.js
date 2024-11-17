const Task = require ("../models/task");

class TaskService {
    async getAllTasks() {
        return await Task.find();
    }
};
module.exports = new TaskService();