const cartService = require("../services/cartService");
const userService = require("../services/userService");
const userTaskService = require("../services/userTaskService");
 class PartnerCartController {
    async getPartnerCart(req, res) {
        try {
            const {partnerEmail} = req.params;
            //gọi service để lấy user theo email
            const partner = await userService.getUserByEmail(partnerEmail);
            if (!partner)
                return res.status(404).json({ message: "User with this email not found" });
            
            //gọi service để lấy cart theo user
            const cart = await cartService.getCartByUser(partner._id);
            if(!cart)
                return res.status(404).json({ message: "Cart items not found" });
            res.json(cart);
        }
        catch(error) {
            console.error("Error fetching partner's cart:", error.message);
            res.status(500).json({error: error.message});
        }
    }

    async getPartnerTasks (req, res) {
        try {
            const {partnerEmail} = req.params;
            //gọi service để lấy user theo email
            const partner = await userService.getUserByEmail(partnerEmail);
            if (!partner)
                return res.status(404).json({ message: "User with this email not found" });
            // gọi service để lấy task theo user
            const tasks = await userTaskService.getUsertask(partner._id);
            if(!tasks)
                return res.status(404).json({ message: "Task items not found" });
            res.json(tasks);
        }
        catch(error) {
            console.error("Error fetching partner's tasks:", error.message);
            res.status(500).json({error: error.message});
        }
    }
 }
 module.exports = new PartnerCartController();