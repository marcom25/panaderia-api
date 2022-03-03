const { register, login } = require("../models/userModel");
const { msToDaysParser } = require("../utils/msToDaysParser");

module.exports.registerController = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await register(username, email, password);
    if (user) {
      return res.status(200).send(user);
    } else {
      return res.status(401).send("Usuario o email ya existentes");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await login(email, password);
    if (user.isUser) {
      return res.status(200).send(user);
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};
