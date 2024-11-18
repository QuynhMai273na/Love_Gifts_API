const userService = require("../services/userService");

class UserController {

    async createUser (req, res) {
        try {
            const {name, email, password, sex} = req.body;
            const saveUser =  await userService.createUser(name, email, password, sex);
            res.json(saveUser);
        }
        catch(error) {
            res.status(500).json({error: error.message});
        }
    }

    async loginUser(req, res) {
        try {
            const { email, password } = req.body;

            // Kiểm tra dữ liệu đầu vào
            if (!email || !password) {
                return res.status(400).json({ error: "Please enter your email and password." });
            }

            // Gọi hàm login từ userService
            const result = await userService.loginUser(email, password);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async getUser(req, res) {
        try {
            const {userId}=req.params;
            const user = await userService.getUserById(userId);
            res.json(user);

        } catch(error) {
            console.log(error);
            
            res.status(500).json({error:error.message});
        }
    }

    async updateUserPartner (req, res) {
        try {
            const {userId}=req.params;
            const { partnerEmail } = req.body;
            if (!partnerEmail) {
                return res.status(400).json({ error: "Partner email is required" });
            }
            
            const updatedUser = await userService.updateUserPartner(userId, partnerEmail);

        // Trả về kết quả
            return res.status(200).json({
              message: "Partner updated successfully",
              user: {
                id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                partner: updatedUser.partner
              }
            });
        } catch(error) {
            res.status(500).json({error:error.message});
        }
    }

}

module.exports = new UserController();