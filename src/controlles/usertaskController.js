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
};

module.exports = new UsertaskController();