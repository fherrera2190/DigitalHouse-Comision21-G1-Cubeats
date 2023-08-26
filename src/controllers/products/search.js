const path = require('path');
const productsFilePath = path.join(__dirname, '../../data/products.json');
const { leerJson } = require('../../data/index');

module.exports = (req, res) => {
    const keywords = req.query.keywords.toLowerCase();
    const products = leerJson(productsFilePath);
    const results = products.filter(({ name, category }) => name.toLowerCase().includes(keywords) || category.toLowerCase().includes(keywords));
    return res.render('results', { products: results });

}