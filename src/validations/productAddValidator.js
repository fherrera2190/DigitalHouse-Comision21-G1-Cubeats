const { check, body } = require("express-validator");

module.exports = [
	check("title")
		.notEmpty()
		.withMessage("El título es obligatorio.")
		.bail()
		.isLength({ min: 4, max: 20 })
		.withMessage("Debe tener entre 4 y 20 caracteres."),

	check("category").notEmpty().withMessage("La categoría es obligatoria."),

	check("price")
		.notEmpty()
		.withMessage("El precio es obligatorio.")
		.isInt({ gt: 1 })
		.withMessage("Precio debe ser un número positivo."),

	check("description")
		.isLength({ min: 5, max: 125 })
		.withMessage("La descripción tener entre 5 y 125 caracteres."),

	body("beat")
		.custom(
			(value, { req }) =>
				req.files.beat && req.files.beat[0].mimetype === "audio/mpeg"
		)
		.withMessage("Sube un beat en formato MP3."),

	body("image")
		.custom(
			(value, { req }) =>
				req.files.image &&
				["image/png", "image/jpeg", "image/jpg"].includes(
					req.files.image[0].mimetype
				)
		)
		.withMessage("Formato de imagen no permitido. Solo PNG, JPEG y JPG."),
];
