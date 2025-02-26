const { check } = require("express-validator");
const db = require("../database/models");

module.exports = [
	check("title")
		.notEmpty()
		.withMessage("El título es obligatorio.")
		.bail()
		.isLength({ min: 4, max: 20 })
		.withMessage("Debe tener entre 4 y 20 caracteres.")
		.bail(),

	check("price")
		.notEmpty()
		.withMessage("El precio es obligatorio.")
		.isInt({ gt: 1 })
		.withMessage("Precio debe ser un número positivo."),

	check("description")
		.isLength({ min: 5, max: 125 })
		.withMessage("La descripción tener entre 5 y 125 caracteres."),
];
