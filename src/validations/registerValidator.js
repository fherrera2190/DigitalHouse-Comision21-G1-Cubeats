const { check, body } = require("express-validator");
const db = require("../database/models");

module.exports = [
	body("username")
		.notEmpty()
		.withMessage("Debe ingresar un nombre de usuario")
		.bail()
		.isLength({ min: 4, max: 20 })
		.withMessage("Debe tener min: 4 y max:20 caracteres")
		.not()
		.isEmail()
		.withMessage("No puede ser un email")
		.custom((value) => {
			return db.User.findOne({
				where: {
					username: value,
				},
			})
				.then((user) => {
					if (user) {
						return Promise.reject();
					}
				})
				.catch((error) => {
					console.log(error);
					return Promise.reject("El username ya se encuentra registrado");
				});
		}),
	body("email")
		.notEmpty()
		.withMessage("Ingresar el email es obligatorio")
		.isEmail()
		.withMessage("Debe ingresar un email valido")
		.custom((value) => {
			return db.User.findOne({
				where: {
					email: value,
				},
			})
				.then((user) => {
					if (user) {
						return Promise.reject();
					}
				})
				.catch((error) => {
					console.log(error);
					return Promise.reject("El email ya se encuentra registrado");
				});
		}),
	check("password")
		.notEmpty()
		.withMessage("Ingrese una contraseña")
		.isLength({ min: 8 })
		.withMessage("La contraseña debe tener por lo menos 8 caracteres"),
	check("password2").notEmpty().withMessage("Reingrese su contraseña"),
	body("password2")
		.custom((value, { req }) => {
			if (value !== req.body.password) {
				return false;
			}
			return true;
		})
		.withMessage("Las contraseñas no coinciden"),
];
