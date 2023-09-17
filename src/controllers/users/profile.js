const path = require('path');
const { leerJson } = require('../../data/index');
const productsFilePath = path.join(__dirname, '../../data/products.json');
const usersFilePath = path.join(__dirname, '../../data/users.json');
const users = leerJson(usersFilePath);
const products = leerJson(productsFilePath);

module.exports = (req, res) => {
    const userFind = users.find(user => user.username === req.params.username.trim());
    if (!userFind) {
        console.log('Usuario no encontrado');
        return res.redirect('/'); //Mandar a 404 con msj user No exists
    }

    const userDatos ={
        username:userFind.username,
        name:userFind.name,
        lastname:userFind.lastname,
        description:userFind.description,
        image:userFind.image,
        cover:userFind.cover,
        date:userFind.date
    }
    const productsFilter = products.filter(product => product.userId === userFind.userId);
    if (userFind) {
        return res.render('profile', {
            products: productsFilter,
            userDatos
        });
    }
    res.redirect('/');
}