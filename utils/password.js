const bcrypt = require('bcrypt');

module.exports.hashPassword = (password) => {
   return bcrypt.hashSync(password, 10);
}

module.exports.comparePassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
}