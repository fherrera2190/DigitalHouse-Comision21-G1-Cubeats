const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const { leerJson } = require('../data/index');


module.exports = {
    index: (req, res) => {
        const products = leerJson(productsFilePath);
        return res.render('index', { products });
    },
    admin: (req, res) => {
        const products = leerJson(productsFilePath);
        console.log(products)
        return res.render('admin', { products });
    },
    search: (req, res) => {
        const keywords = req.query.keywords.toLowerCase();
        const products = leerJson(productsFilePath);
        const results = products.filter(({ name, category }) => name.toLowerCase().includes(keywords) || category.toLowerCase().includes(keywords));
        console.log(products)
        return res.render('admin', { products: results });
    }
}