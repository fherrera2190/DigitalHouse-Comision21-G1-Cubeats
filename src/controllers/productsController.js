const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const { leerJson } = require('../data/index');

module.exports = {
    index: (req, res) => {
        const products = leerJson(productsFilePath);
        return res.render('products', { products });
    },
    detail: require('./products/detail'),
    addProduct: require('./products/addProduct'),
    storeProduct: require('./products/storeProduct'),
    searchProduct: require('./products/search'),
    deleteProduct: require('./products/deleteProduct')
}