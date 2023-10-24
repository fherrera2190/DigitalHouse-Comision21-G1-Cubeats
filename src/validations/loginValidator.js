const { check, body } = require("express-validator");
const { compareSync } = require("bcryptjs");
const db = require("../database/models");

module.exports = [
  check("email")
    .notEmpty()
    .withMessage("Ingresar el email es obligatorio")
    .isEmail()
    .withMessage("Formato inválido"),

  body("password").custom((value, { req }) => {
    return db.User
      .findOne({
        where: {
          email: req.body.email
        }
      })
      .then(user => {
        if (!user || !compareSync(value, user.password)) {
          return Promise.reject();
        }
      })
      .catch(() => Promise.reject("Credenciales inválidas"));
  })
];
