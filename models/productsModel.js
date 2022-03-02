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

module.exports.uploadData = async (name, category, price, img) => {
    
    const uploadedProduct = await request(`
        INSERT INTO products (name, category, price, img) 
        VALUE ('${name}','${category}', ${price},'${img}')
    `);

    return {
        idData: (uploadedProduct) ? true: false,
        data: uploadedProduct,
    }
}