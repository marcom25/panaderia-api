const {request} = require('../db/mysql');
const { hashPassword, comparePassword } = require('../utils/password');

module.exports.register = async (username, email, password) => {

    const hashedPassword = hashPassword(password);
    
    const verificarUser = await request(`
        SELECT * FROM users WHERE email = '${email}' OR user = '${username}'
    `)
    
    if(verificarUser) {
        return false;
    } else {
        const user = await request(`
            INSERT INTO users (user, email, password)
            VALUE ('${username}', '${email}', '${hashedPassword}')
        `);
        
        delete user.password;
        return {
            id: user.inserId
        }
    }
    


}

module.exports.login = async (email, password) => {

    const user = await request(`
        SELECT * FROM users WHERE email = '${email}'
    `);
    
    if (user) {
        return {
            isUser: user ? true:false,
            ...user
        }
    }

    return {
        isUser: false
    }

}