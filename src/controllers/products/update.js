const db = require("../../database/models");
const { validationResult } = require("express-validator");
const { existsSync, unlinkSync } = require("fs");
const path = require("path");

module.exports = async (req, res) => {
	const errors = validationResult(req);

	try {
		const productModify = await db.Beat.findOne({
			where: { id: +req.params.id },
		});

		if (errors.isEmpty() && productModify) {
			const { title, price, category, description } = req.body;

			productModify.name = title.trim();
			productModify.description = description;
			productModify.price = +price;
			productModify.category = +category;

			const imageFilename = req.files.image && req.files.image[0].filename;
			const beatFilename = req.files.beat && req.files.beat[0].filename;

			if (imageFilename) {
				existsSync(
					path.join(__dirname, `./public/img/products/${productModify.image}`)
				) &&
					unlinkSync(
						path.join(__dirname, `./public/img/products/${productModify.image}`)
					);
				productModify.image = imageFilename;
			}

			if (beatFilename) {
				existsSync(
					path.join(__dirname, `./public/audio/${productModify.beat}`)
				) &&
					unlinkSync(
						path.join(__dirname, `./public/audio/${productModify.beat}`)
					);
				productModify.beat = beatFilename;
			}

			await productModify.save();
			console.log(productModify);

			return res.redirect("/");
		} else {
			// Manejo de errores
			const categories = await db.Category.findAll({ order: ["name"] });

			req.files.image &&
				existsSync(
					path.join(
						__dirname,
						`./public/img/products/${req.files.image[0].filename}`
					)
				) &&
				unlinkSync(
					path.join(
						__dirname,
						`./public/img/products/${req.files.image[0].filename}`
					)
				);

			req.files.beat &&
				existsSync(
					path.join(__dirname, `./public/audio/${req.files.beat[0].filename}`)
				) &&
				unlinkSync(
					path.join(__dirname, `./public/audio/${req.files.beat[0].filename}`)
				);

			const products = await db.Beat.findByPk(req.params.id, {
				include: {
					all: true,
				},
			});

			return res.render("editbeat", {
				categories,
				...products?.dataValues,
				errors: errors.mapped(),
				old: req.body,
			});
		}
	} catch (error) {
		console.error(error);
		res.status(500).send("Error interno del servidor");
	}
};
