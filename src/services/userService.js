const User = require ("../models/user");

class UserService {
    async createUser(name, email, password, sex) {
        const newUser= new User({name, email, password, sex});
        return await newUser.save();
    }
};
module.exports = new UserService();