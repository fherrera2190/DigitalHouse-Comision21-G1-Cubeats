const { check } = require("express-validator");
const db = require("../database/models");

module.exports = [
	check("title")
		.notEmpty()
		.withMessage("El Titulo del Beat es obligatorio")
		.bail()
		.isLength({ min: 4, max: 20 })
		.withMessage("Debe tener entre 4 y 20 caracteres")
		.bail()
		.custom(async (value) => {
			const beat = await db.Beat.findOne({ where: { title: value } });
			if (beat) {
				return Promise.reject("El título ya existe en la base de datos");
			}
		}),

	check("price")
		.notEmpty()
		.withMessage("Es obligatorio")
		.isInt({ gt: 1 })
		.withMessage("El precio debe ser positivo"),
];
