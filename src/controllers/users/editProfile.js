const { validationResult } = require("express-validator");
const db = require("../../database/models");
const { existsSync, unlinkSync } = require("fs");
const path = require("path");
const { log } = require("console");

module.exports = async (req, res) => {
	const errors = validationResult(req);

	if (errors.isEmpty()) {
		const { first_name, last_name, image, description } = req.body;

		try {
			const user = await db.User.findByPk(req.session.userLogged.userId);
			await user.update({
				first_name,
				last_name,
				image: req.files.image[0].filename,
				description,
			});

			// req.session.userLogged.username = username;
			// req.session.userLogged.image = req.file.filename;

			if (req.cookies.CuBeatsX100pre) {
				res.cookie("CuBeatsX100pre", req.session.userLogged);
			}

			return res.redirect("/");
		} catch (error) {
			console.error("Error al actualizar el usuario:", error);
			return res.status(500).send("Error al actualizar el usuario");
		}
	} else {
		try {
			const user = await db.User.findByPk(req.session.userLogged.userId);
			const userData = user.dataValues;

			return res.render("profile", {
				...userData,
				errors: errors.mapped(),
			});
		} catch (error) {
			console.error("Error al buscar el usuario en la base de datos:", error);
			return res
				.status(500)
				.send("Error al buscar el usuario en la base de datos");
		}
	}
};
