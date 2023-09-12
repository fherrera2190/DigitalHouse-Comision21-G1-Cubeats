const { check, body } = require("express-validator");
const { leerJson } = require("../data");

module.exports = [
    body("username")
        .notEmpty().withMessage('Debe ingresar un nombre de usuario').bail()
        .isLength({ min: 4, max: 20 }).withMessage('Debe tener min: 4 y max:20 caracteres')
        .not().isEmail().withMessage("No puede ser un email")
        .custom(value => {
            const users = leerJson(require('path').join(__dirname, '../data/users.json'));
            const user = users.find(user => user.username === value);
            if (user) {
                return false
            }
            return true
        }).withMessage('"error: Ya existe el username proporcionado"'),
    body("email")
        .notEmpty().withMessage("Ingresar el email es obligatorio")
        .isEmail().withMessage("Debe ingresar un email valido")
        .custom(value => {
            const users = leerJson(require('path').join(__dirname, '../data/users.json'));
            const user = users.find(user => user.email === value);
            if (user) {
                return false
            }
            return true
        }).withMessage('"error: Ya existe el email proporcionado"'),
    check("password")
        .notEmpty().withMessage("Ingrese una contraseña")
        .isLength({ min: 8 }).withMessage("La contraseña debe tener por lo menos 8 caracteres"),
    check("password2").notEmpty().withMessage("Reingrese su contraseña"),
    body("password2").custom((value, { req }) => {
        if (value !== req.body.password) {
            return false;
        }
        return true;
    }).withMessage("Las contraseñas no coinciden"),
    check("terminos").isString("on").withMessage("Debes aceptar los términos y condiciones")
];