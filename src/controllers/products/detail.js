const { leerJson } = require('../../data/index');
const path = require('path');
const productsFilePath = path.join(__dirname, '../../data/products.json');
const usersFilePath = path.join(__dirname, '../../data/users.json');

module.exports = (req, res) => {
    const products = leerJson(productsFilePath);
    const product = products.find(product => product.productId === +req.params.id);
    if (product) {
        const users = leerJson(usersFilePath);
        const { username, image, cover } = users.find(user => product.userId === user.userId);
        return res.render('productDetail', { ...product, user: { username, image, cover } });
    } else {
        return res.redirect('/');
    }
}