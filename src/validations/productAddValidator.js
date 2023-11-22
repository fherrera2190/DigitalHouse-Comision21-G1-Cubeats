const { check, body } = require("express-validator");

module.exports = [
	check("title")
		.notEmpty()
		.withMessage("El Titulo del Beat es obligatorio")
		.bail()
		.isLength({ min: 4, max: 20 })
		.withMessage("Debe tener entre 4 y 20 caracteres"),

	check("category").notEmpty().withMessage("La categoría es obligatoria"),

	check("price")
		.notEmpty()
		.withMessage("Es obligatorio")
		.isInt({ gt: 1 })
		.withMessage("El precio debe ser positivo"),

	check("description")
		.isLength({ min: 10, max: 500 })
		.withMessage("Debe tener entre 20 y 500 caracteres"),

	body("beat")
		.custom((value, { req }) => {
			if (req.files.beat && req.files.beat[0].mimetype == "audio/mpeg") {
				return true;
			}
			return false;
		})
		.withMessage("Debes subir un beat(mp3)"),

	body("image")
		.custom((value, { req }) => {
			if (
				req.files.image &&
				(req.files.image[0].mimetype == "image/png" ||
					req.files.image[0].mimetype == "image/jpeg" ||
					req.files.image[0].mimetype == "image/jpg")
			) {
				return true;
			}
			return false;
		})
		.withMessage(`Tipo de archivo no permitido`),
];
