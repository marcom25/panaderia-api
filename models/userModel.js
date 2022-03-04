const { request } = require("../db/mysql");
const { hashPassword, comparePassword } = require("../utils/password");

module.exports.register = async (username, email, password) => {
  const hashedPassword = hashPassword(password);

  const verificarUser = await request(`
        SELECT * FROM users WHERE email = '${email}' OR user = '${username}'
    `);

  if (verificarUser) {
    return {
      isAlreadyUsed: true,
    };
  }

  const user = await request(`
      INSERT INTO users (user, email, password)
      VALUE ('${username}', '${email}', '${hashedPassword}')
    `);
  delete user.password;
  return {
    id: user.inserId,
  };
};

module.exports.login = async (email, password) => {
  const user = await request(`
      SELECT * FROM users WHERE email = '${email}'
    `);

  console.log(email);

  if (user && comparePassword(password, user.password)) {
    delete user.password;
    return {
      isUser: user ? true : false,
      ...user,
    };
  }
  return {
    isUser: false,
  };
};

module.exports.recoverPassword = async (email, password) => {
  const user = await request(`
    SELECT * FROM users WHERE email = '${email}'
    `);

  if (user) {
    if (password === comparePassword) {
      const hashedPassword = hashPassword(password);
      const changePassword = await request(`
        UPDATE users SET password = '${hashedPassword}' WHERE email = '${email}'
        `);
    console.log(`changePassword: ${changePassword}`);
    return {
      registeredMail: true,
      samePassword: true,
      changedPassword: true,
      changePassword,
    };

  }

  return {
    registeredMail: false,
    samePassword: false,
    changedPassword: false,
  };
}
}
