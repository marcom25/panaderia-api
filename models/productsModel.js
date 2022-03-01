const {request} = require('../db/mysql');

module.exports.productsModel = async () => {
    const product = await request(`
        SELECT * FROM products
    `);

    
    return {
        idData: (product) ? true: false,
        data: product
    }
}