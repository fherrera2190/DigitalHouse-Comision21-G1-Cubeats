const { leerJson, existsSync, escribirJson, unlinkSync } = require("../../data");
const path = require('path');
const productsFilePath = path.join(__dirname, '../../data/products.json');


module.exports = (req, res) => {
    const { title, price, category, description } = req.body;
    const products = leerJson(productsFilePath);
    console.log(req.files.image);

    const productModify = products.find(product => product.productId === +req.params.id)
    if (productModify) {
        productModify.name = title.trim()
        productModify.description = description
        productModify.price = +price
        productModify.category = category
        if (req.files.image) {
            existsSync(`./public/img/products/${productModify.image}`) && unlinkSync(`./public/img/products/${productModify.image}`);
            productModify.image = req.files.image[0].filename
        }
        if (req.files.beat) {
            existsSync(`./public/audio/${productModify.beat}`) && unlinkSync(`./public/audio/${productModify.beat}`);
            productModify.beat = req.files.beat[0].filename
        }
    }

    console.log(productModify);

    escribirJson(productsFilePath, products)

    return res.redirect('/')
}