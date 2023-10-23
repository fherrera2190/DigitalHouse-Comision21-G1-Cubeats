const { check, body } = require("express-validator");
const { leerJson } = require("../data");
const { compareSync } = require("bcryptjs");
const path = require("path");
const db = require("../database/models");

module.exports = [
  check("email")
    .notEmpty()
    .withMessage("Ingresar el email es obligatorio")
    .isEmail()
    .withMessage("Formato inválido"),

  body("password")
    .custom(async (value, { req }) => {
      console.log(value);
      const user = await db.User.findOne({
        where: {
          email: req.body.email
        }
      });
      console.log(user.password);
      if (!user || !compareSync(value, user.password)) {
        console.log("Entre aca");
        return false;
      }
      return true;
    })
    .withMessage("Credenciales inválidas")
];
