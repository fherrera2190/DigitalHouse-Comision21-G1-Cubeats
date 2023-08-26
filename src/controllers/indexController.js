
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const { leerJson } = require('../data/index');

module.exports = {
    index: (req, res) => {
        res.render('index');
    },
    admin: (req, res) => {
        const products = leerJson(productsFilePath);
        console.log(products)
        return res.render('admin', { products });
    },
}