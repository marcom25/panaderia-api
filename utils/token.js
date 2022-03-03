const jwt = require('jsonwebtoken');

module.exports.createToken = (data) => {
    return jwt.sign(data, 'hola');
}