const path = require('path');
const productsFilePath = path.join(__dirname, '../../data/products.json');
const { leerJson } = require('../../data/index');

module.exports = (req, res) => {
    const products = leerJson();
    console.log(products)
    return res.redirect('/');
}