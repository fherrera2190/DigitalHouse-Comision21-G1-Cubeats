const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const { leerJson } = require('../data/index');

module.exports = {
    index: (req, res) => {
        const products = leerJson(productsFilePath);
        return res.render('index', { products });
    },
    admin: (req, res) => {
        res.render('admin');
    },
    editProduct: (req, res) => {
        res.render('editBeat');
    }
}