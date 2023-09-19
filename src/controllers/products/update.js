const { leerJson, existsSync, escribirJson, unlinkSync } = require("../../data");
const { validationResult } = require("express-validator");
const path = require('path');
const productsFilePath = path.join(__dirname, '../../data/products.json');


module.exports = (req, res) => {
    const errors = validationResult(req);
    const { title, price, category, description } = req.body;
    const products = leerJson(productsFilePath);
    console.log(req.files.image);
    
    if (errors.isEmpty()) { // toda la logica que teníamos la metí adentro de este if
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

    } else {
        const categories = leerJson(categoriesFilePath);
        (req.files.beat && existsSync(`./public/audio/${req.files.beat[0].filename}`)) && unlinkSync(`./public/audio/${req.files.beat[0].filename}`);

        if (req.files.beat) {
            req.files.beat.forEach(file => {
                existsSync(`./public/audio/${file.filename}`) && unlinkSync(`./public/audio/${file.filename}`)
            })
        }

        return res.render('editBeats', {
            categories,
            errors: errors.mapped(),
            old: req.body
        })
    }

}