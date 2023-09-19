const path = require('path');
const { leerJson, escribirJson, existsSync, unlinkSync } = require('../../data/index');
const productsFilePath = path.join(__dirname, '../../data/products.json');
const usersFilePath = path.join(__dirname, '../../data/users.json');
const users = leerJson(usersFilePath);
const products = leerJson(productsFilePath);
const { validationResult } = require('express-validator');

module.exports = (req, res) => {
    const errors = validationResult(req);
    const users = leerJson(usersFilePath);
    if (errors.isEmpty()) {
        userModify = users.find(user => user.username === req.params.username)
        userModify.name = req.body.name.trim();
        userModify.lastname = req.body.lastname.trim();
        if (req.files.image) {
            existsSync(`./public/img/users/${userModify.image}`) && unlinkSync(`./public/img/users/${userModify.image}`);
            userModify.image = req.files.image[0].filename;
        } 
        if (req.files.cover) {
            existsSync(`./public/img/users/${userModify.cover}`) && unlinkSync(`./public/img/users/${userModify.cover}`);
            userModify.cover = req.files.cover[0].filename;
        } 
        userModify.description = req.body.description.trim();
        escribirJson(usersFilePath, users);
        return res.redirect(`/`);
    }

    if (req.files.image) existsSync(`./public/img/users/${req.files.image[0].filename}`) && unlinkSync(`./public/img/users/${req.files.image[0].filename}`);
    if (req.files.cover) existsSync(`./public/img/users/${req.files.cover[0].filename}`) && unlinkSync(`./public/img/users/${req.files.cover[0].filename}`);
    const userFind = users.find(user => user.username === req.params.username.trim());

    if (!userFind) {
        console.log('Usuario no encontrado');
        return res.redirect('/'); //Mandar a 404 con msj user No exists
    }
    const userDatos = {
        username: userFind.username,
        name: userFind.name,
        lastname: userFind.lastname,
        description: userFind.description,
        image: userFind.image,
        cover: userFind.cover,
        date: userFind.date
    }
    const productsFilter = products.filter(product => product.userId === userFind.userId);
    if (userFind) {
        return res.render('profile', {
            products: productsFilter,
            userDatos,
            errors: errors.mapped()
        });
    }
}