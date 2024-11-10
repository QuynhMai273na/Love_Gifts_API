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

}

module.exports = new UserController();