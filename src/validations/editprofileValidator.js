const { check, body } = require("express-validator");

module.exports = [
	check("first_name")
		.notEmpty()
		.withMessage("Debe ingresar un Nombre")
		.isAlpha("es-ES")
		.withMessage("Solo letras"),
	check("last_name")
		.notEmpty()
		.withMessage("Debe ingresar un apellido")
		.isAlpha("es-ES")
		.withMessage("Solo letras"),
	check("description")
		.notEmpty()
		.withMessage("Debe ingresar un una descripcion")
		.isLength({ min: 5, max: 125 })
		.withMessage("Debe tener entre 5 y 125 caracteres"),
	body("image")
		.custom((value, { req }) => {
			if (req.cualquiera) {
				return false;
			}
			return true;
		})
		.withMessage(`Tipo de archivo no permitido`),
	body("cover")
		.custom((value, { req }) => {
			if (req.cualquiera) {
				return false;
			}
			return true;
		})
		.withMessage(`Tipo de archivo no permitido`),
];
