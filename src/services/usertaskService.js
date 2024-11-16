const Usertask = require ("../models/usertask");

class UsertaskService {
    async addUsertask(userId, taskId) {
        const newUsertask = new Usertask({
            user: userId,
            task: taskId,
            status :"Incomplete"
        })
        return await newUsertask.save();
    }

}

module.exports = new UsertaskService();