const { rawListeners } = require("process");

const {register, login} = require('../models/userModel');

module.exports.registerController = async (req, res) => {
    const {username, email, password} = req.body;

    try {
        const user = await register(username, email, password);
        return res.status(200).send(user);
    } catch (error) {
        console.log(error);
    }
}

module.exports.loginController = async (req, res) => {
    const {email, password} = req.body;

    try {
        
        const user = await login(email, password);
        if (user.isUser) {
            return res.status(200).send(user);
        }
        else {
            return res.status(200).send(user);
        }


    } catch (error) {
        
    }
}