const {check, body} = require("express-validator");
const {leerJson} = require("../data");
const {compareSync} = require("bcryptjs");
const path = require('path');
const usersFilePath = path.join(__dirname, '../../data/users.json');


module.exports = [
    check("email")
    .notEmpty()
    .withMessage("Ingresar el email es obligatorio")
    .isEmail()
    .withMessage("Formato inválido"),

    body("password")
    .custom((value, {req}) => {
        const users = leerJson(usersFilePath);
        const user = users.find(user => user.email === req.body.email);
        if(!user || !compareSync(value, user.password)){
            return false
        }
        return true
        }
    ).withMessage('Credenciales inválidas')
];