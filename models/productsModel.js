const {request} = require('../db/mysql');

module.exports.productsModel = async () => {
    const products = await request(`
        SELECT * FROM products
    `);

    
    return {
        idData: products.length ? true: false,
        data: [...products]
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