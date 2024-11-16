const taskService = require("../services/taskService");

class TaskController {
    async getAllTasks (req, res ) {
        try {
            const tasks = await taskService.getAllTasks();
            res.json(tasks);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
module.exports = new TaskController();