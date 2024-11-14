const User = require ("../models/user");
const jwt = require("jsonwebtoken");

class UserService {
    async createUser(name, email, password, sex) {
        const newUser= new User({name, email, password, sex});
        return await newUser.save();
    }
    async loginUser(email, password) {
        
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("User is not exist, please sign up first!");
        }

        const isPasswordValid = password === user.password;
        if (!isPasswordValid) {
            throw new Error("Incorrect password.");
        }

        const secret_key="tnguyen";
        //const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        const token = jwt.sign({ userId: user._id, email: user.email, name: user.name, sex: user.sex, point: user.point, partner:user.partner }, secret_key, { expiresIn: "1h" });

        return {
            message: "Login success",
            token,
            user: { id: user._id, email: user.email, name: user.name, sex: user.sex, point: user.point, partner:user.partner },
        };
    }
};
module.exports = new UserService();