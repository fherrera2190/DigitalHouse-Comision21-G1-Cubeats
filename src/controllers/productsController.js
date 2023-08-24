const { leerJson, escribirJson, exists } = require('../data/index');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');

module.exports = {
    index: (req, res) => {
        const products = leerJson(productsFilePath);
        return res.render('products', {products});
    },

    detail: (req, res) => {
        const products = leerJson(productsFilePath);
        const product = products.find(product => product.id === +req.params.id);
        console.log(product)
        return res.render('detail', { ...product });
    },
}