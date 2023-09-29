const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const { leerJson, escribirJson } = require('../../data/index');
const path = require('path');
const usersFilePath = path.join(__dirname, '../../data/users.json');

//Controlar estoy para mejorar performance si puede ir deentro del IF,ahora no hay tiempo
const users = leerJson(usersFilePath);

module.exports = (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const newUser = {
            userId: users[users.length - 1].userId + 1,
            username: req.body.username.trim(),
            name: "",
            lastname: "",
            email: req.body.email.trim(),
            description: null,
            image: null,
            cover: null,
            role: "user",
            password: bcrypt.hashSync(req.body.password.trim(), 10),
            date: new Date
        }
        users.push(newUser);
        escribirJson(usersFilePath, users);
        res.redirect('/users/login');
    } else {
        res.render('register', {
            errors: errors.mapped(),
            old: req.body
        });
    }
}