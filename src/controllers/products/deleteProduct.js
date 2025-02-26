const db = require("../../database/models");
const { existsSync, unlinkSync } = require("fs");

module.exports = async (req, res) => {
	try {
		const productId = +req.params.id;

		await db.sequelize.transaction(async (t) => {
			const product = await db.Beat.findByPk(productId, { transaction: t });

			if (product) {
				const imageFilePath = `./public/img/products/${product.image}`;
				const beatFilePath = `./public/audio/${product.beat}`;

				if (existsSync(imageFilePath)) {
					unlinkSync(imageFilePath);
				}

				if (existsSync(beatFilePath)) {
					unlinkSync(beatFilePath);
				}

				// Eliminar referencias en artistbeats
				await db.ArtistBeat.destroy({
					where: { beatId: productId },
					transaction: t,
				});

				// Eliminar el producto
				await product.destroy({ transaction: t });

				return res.redirect("/");
			}

			console.log("El producto no existe");
			return res.redirect("/");
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send("Error interno del servidor");
	}
};
