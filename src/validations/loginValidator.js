const {check, body} = require("express-validator");
const {leerJson} = require("../data");
const {compareSync} = require("bcryptjs");
const path = require('path');



module.exports = [
    check("email")
    .notEmpty()
    .withMessage("Ingresar el email es obligatorio")
    .isEmail()
    .withMessage("Formato inválido"),

    body("password")
    .custom((value, {req}) => {
        const users = leerJson(require('path').join(__dirname, '../data/users.json'));
        const user = users.find(user => user.email === req.body.email);
        if(!user || !compareSync(value, user.password)){
            return false
        }
            return true
    }).withMessage('Credenciales inválidas')

];