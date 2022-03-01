const {request} = require('../db/mysql');


module.exports.register = async (username, email, password) => {

    const user = await request(`
        INSERT INTO users (user, email, password)
        VALUE ('${username}', '${email}', '${password}')
    `);

    return {
        id: user.inserId
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