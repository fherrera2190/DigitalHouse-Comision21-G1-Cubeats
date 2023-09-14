const path = require('path');
const { leerJson } = require('../../data/index');
const productsFilePath = path.join(__dirname, '../../data/products.json');
const usersFilePath = path.join(__dirname, '../../data/users.json');
const users = leerJson(usersFilePath);
const products = leerJson(productsFilePath);

module.exports = (req, res) => {
    const userFind = users.find(user => user.username === req.params.username.trim());
    if (userFind) {
        res.render('profile');
    } else {

    }
    console.log(userFind);
    res.redirect('/');
}