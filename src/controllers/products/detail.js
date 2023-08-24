const { leerJson } = require('../../data/index');
const path = require('path');
const productsFilePath = path.join(__dirname, '../../data/products.json');
console.log(productsFilePath)
module.exports = (req, res) => {
    const products = leerJson(productsFilePath);
    const product = products.find(product => product.productId === +req.params.id);
    if (product) {
        return res.render('productDetail', { ...product, });
    }
}