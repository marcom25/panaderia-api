

const {register, login} = require('../models/userModel');

module.exports.registerController = async (req, res) => {
    const {username, email, password} = req.body;
    
    try {
        const user = await register(username, email, password);
        if(user) {
            return res.status(200).send(user);
        } else {
            return res.status(401).send(user);
        }
        
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
        
        return res.status(404).send(user);
        
    } catch (error) {
        console.log(error);
    }
}