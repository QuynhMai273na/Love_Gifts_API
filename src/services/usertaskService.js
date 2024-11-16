const Usertask = require ("../models/usertask");
const User = require("../models/user");
class UsertaskService {
    async addUsertask(userId, taskId) {
        const newUsertask = new Usertask({
            user: userId,
            task: taskId,
            status :"Incomplete"
        })
        return await newUsertask.save();
    }

    async getUsertask (userId) {
        return await Usertask.find({user: userId}).populate("task");
    }

    async completeUsertask(usertaskId) {
        const usertask = await Usertask.findOne({ _id: usertaskId }).populate("task");
        //console.log(userTask); // Add this line
       // if (!userTask) {
      //  return "Task not found" ;
        //}
        // Cập nhật trạng thái usertask
        usertask.status = "Completed";
        await usertask.save();
    
        // Cập nhật điểm của user
        const user = await User.findById(usertask.user);
        user.point += usertask.task.point;
        await user.save(); 
    
        return usertask;
       //return await Usertask.find({_id: usertaskId}).populate("task");
    }

}

module.exports = new UsertaskService();