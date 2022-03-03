const {productsModel, uploadData} = require('../models/productsModel');
const {data} = require('../data');


module.exports.productsController = async (req, res) => {
    try {
        const products = await productsModel();

        return res.status(200).send(products);
    } catch (error) {
        console.log(error);
    }
}

module.exports.updatedProductController = async (req, res) => {

    try {
        const updatedProducts = data.map((i) => {
            uploadData(i.name, i.category, i.price, i.img)
        })
        return res.status(200).send(updatedProducts);
    } catch (error) {
        console.log(error);
    }
}