const path = require('path');
const productsFilePath = path.join(__dirname, '../../data/products.json');
const { leerJson, escribirJson } = require('../../data/index');

module.exports = (req, res) => {
    const products = leerJson(productsFilePath);
    const obj = req.files.image;
    //console.log(req.body)
    // console.log(req.files)
    // console.log(req.fileValidation)
    if (!req.files.beat) {
        return res.redirect('/products/add');
    }
    const newProduct = {
        productId: products[products.length - 1].productId + 1,
        name: req.body.title,
        userId: 1,
        category: req.body.category,
        description: req.body.description,
        image: req.files.image ? req.files["image"][0].filename : null,
        beat: req.files["beat"][0].filename,
        price: req.body.price
    }
    products.push(newProduct);
    escribirJson(productsFilePath, products);
    return res.redirect('/');
}