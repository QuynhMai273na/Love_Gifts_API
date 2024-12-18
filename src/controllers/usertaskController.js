const usertaskService = require("../services/usertaskService");

class UsertaskController {
    async addUsertask (req, res) {
        try {

            const {userId, taskId} = req.body;
            const newUsertask = await usertaskService.addUsertask(userId, taskId);
            res.json(newUsertask);

        } catch(error) {
            res.status(500).json({error: error.message});
        }
    }
    async getUsertask(req, res) {
        try {
            const {userId} = req.params;
            const usertasks = await usertaskService.getUsertask(userId);
            res.json(usertasks);


        } catch(error) {
            res.status(500).json({error: error.message});
        }
    }

    async completeUserTask(req, res) {
        try {
            const { usertaskId } = req.params;
            const updatedUsertask = await usertaskService.completeUsertask(usertaskId);
            res.json(updatedUsertask);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = new UsertaskController();