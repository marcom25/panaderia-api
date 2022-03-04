const { register, login, recoverPassword } = require("../models/userModel");
const { msToDaysParser } = require("../utils/msToDaysParser");
const { createToken } = require("../utils/token");



module.exports.registerController = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await register(username, email, password);
    if (user) {
      return res.status(200).send(user);
    } else {
      return res.status(200).send(user);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await login(email, password);
    const token = createToken(user);

    if (user.isUser) {
      res.cookie('session', token, {
        maxAge: msToDaysParser(4),
        httpOnly: true
      });

      return res.status(200).send(user);
    } else {
      return res.status(200).send(user);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.recoverPasswordController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await recoverPassword(email, password,);
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};
