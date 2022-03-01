const {productsModel} = require('../models/productsModel');

module.exports.productsController = async (req, res) => {
    try {
        const products = await productsModel();

        return res.status(200).send(products);
    } catch (error) {
        console.log(error);
    }
}