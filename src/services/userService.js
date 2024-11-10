const User = require ("../models/user");

class UserService {
    async createUser(name, email, password) {
        const newUser= new User({name, email, password});
        return await newUser.save();
    }
};
module.exports = new UserService();