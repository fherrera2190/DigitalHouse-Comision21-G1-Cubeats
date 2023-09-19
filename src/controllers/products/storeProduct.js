const { validationResult } = require('express-validator');
const path = require('path');
const productsFilePath = path.join(__dirname, '../../data/products.json');
const categoriesFilePath = path.join(__dirname, '../../data/categories.json');
const { leerJson, escribirJson, existsSync, unlinkSync } = require('../../data/index');

module.exports = (req, res) => {

    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const products = leerJson(productsFilePath);
        if (!req.files.beat) {
            existsSync(`./public/img/products/${req.files.image[0].filename}`) && unlinkSync(`./public/img/products/${req.files.image[0].filename}`);
            return res.redirect('/products/add');
        }
        const newProduct = {
            productId: products[products.length - 1].productId + 1,
            name: req.body.title,
            userId: req.session.userLogged.userId,
            category: req.body.category,
            description: req.body.description,
            image: req.files.image ? req.files.image[0].filename : null,
            beat: req.files.beat[0].filename,
            price: req.body.price,
            like: 0
        }
        products.push(newProduct);
        escribirJson(productsFilePath, products);
        console.log(req.session.userLogged.userId)
        res.redirect('/');
    } else {
        const categories = leerJson(categoriesFilePath);

        (req.files.image && existsSync(`./public/img/products/${req.files.image[0].filename}`)) && unlinkSync(`./public/img/products/${req.files.image[0].filename}`);
        (req.files.beat && existsSync(`./public/audio/${req.files.beat[0].filename}`)) && unlinkSync(`./public/audio/${req.files.beat[0].filename}`);

        if (req.files.beat) {
            req.files.beat.forEach(file => {
                existsSync(`./public/audio/${file.filename}`) && unlinkSync(`./public/audio/${file.filename}`)
            })
        }
        return res.render('createBeats', {
            categories,
            errors: errors.mapped(),
            old: req.body
        })
    }
}