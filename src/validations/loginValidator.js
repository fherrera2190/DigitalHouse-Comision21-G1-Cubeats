const { check, body } = require("express-validator");
const { compareSync } = require("bcryptjs");
const db = require("../database/models");
const { Op } = require("sequelize");

module.exports = [
	check("emailOrUsername")
		.notEmpty()
		.withMessage("Ingresar el email o usuario es obligatorio.")
		.custom(async (value) => {
			const user = await db.User.findOne({
				where: {
					[Op.or]: [{ email: value }, { username: value }],
				},
			});

			if (!user) {
				return Promise.reject("El email o usuario no existe.");
			}
		}),

	body("password").custom((value, { req }) => {
		return db.User.findOne({
			where: {
				[Op.or]: [
					{ email: req.body.emailOrUsername },
					{ username: req.body.emailOrUsername },
				],
			},
		})
			.then((user) => {
				if (!user || !compareSync(value, user.password)) {
					return Promise.reject("Credenciales inválidas.");
				}
			})
			.catch(() => Promise.reject("Credenciales inválidas."));
	}),
];
