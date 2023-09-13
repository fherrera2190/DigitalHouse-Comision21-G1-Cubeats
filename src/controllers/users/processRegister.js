const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const { leerJson, escribirJson } = require('../../data/index');
const path = require('path');
const usersFilePath = path.join(__dirname, '../../data/users.json');
const users = leerJson(usersFilePath);

module.exports = (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const newUser = {
            userId: users[users.length - 1].userId + 1,
            username: req.body.username.trim(),
            name: null,
            lastname: null,
            email: req.body.email.trim(),
            description: null,
            image: null,
            cover: null,
            role: "user",
            password: bcrypt.hashSync(req.body.password.trim(), 10),
            date: new Date
        }
        req.session.userLogged = {
            username: newUser.username,
            image: newUser.image
        }
        req.body.checkbox !== undefined && res.cookie('userLogged', req.session.userLogged, {
            maxAge: 10000 * 60
        });
        users.push(newUser);
        escribirJson(usersFilePath, users);
        res.render('userStep2register', {
            username: newUser.username,
            email: newUser.email
        });
    } else {
        res.render('register', {
            errors: errors.mapped(),
            old: req.body
        });
    }
}