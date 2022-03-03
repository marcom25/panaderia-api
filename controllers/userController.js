const { register, login, recoverPassword } = require("../models/userModel");
const { msToDaysParser } = require("../utils/msToDaysParser");
const { createToken } = require("../utils/token");

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
            const token = createToken(user);
    
            res.cookie('session', token, {
                maxAge: msToDaysParser(4),
                httpOnly: true
            });

            return res.status(200).send(user);
        }
        
        return res.status(404).send(user);
        
    } catch (error) {
        console.log(error);
    }
  
};

module.exports.recoverPasswordController = async (req, res) => {
    const {email, password, passwordCompare} = req.body;

    try {
        const user = await recoverPassword(email, password, passwordCompare);
        return res.status(200).send(user);
        
    } catch (error) {
        console.log(error);
    }
}
