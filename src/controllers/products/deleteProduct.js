const path = require('path');
const productsFilePath = path.join(__dirname, '../../data/products.json');
const { leerJson, existsSync, escribirJson, unlinkSync } = require('../../data/index');

module.exports = (req, res) => {
    let products = leerJson(productsFilePath);
    const product = products.find(product => product.productId === +req.params.id);
    if (product) {
        existsSync(`./public/img/products/${product.image}`) && unlinkSync(`./public/img/products/${product.image}`);
        existsSync(`./public/audio/${product.beat}`) && unlinkSync(`./public/audio/${product.beat}`);
        products = products.filter(product => product.productId !== +req.params.id);
        escribirJson(productsFilePath, products);
        res.redirect('/admin');
    }
    console.log('El producto no existe');
    res.redirect('/admin');
}