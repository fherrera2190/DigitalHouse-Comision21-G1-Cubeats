// const path = require("path");
// const productsFilePath = path.join(__dirname, "../../data/products.json");
// const {
// 	leerJson,
// 	existsSync,
// 	escribirJson,
// 	unlinkSync,
// } = require("../../data/index");

// module.exports = (req, res) => {
// 	let products = leerJson(productsFilePath);
// 	const product = products.find(
// 		(product) => product.productId === +req.params.id
// 	);
// 	if (product) {
// 		existsSync(`./public/img/products/${product.image}`) &&
// 			unlinkSync(`./public/img/products/${product.image}`);
// 		existsSync(`./public/audio/${product.beat}`) &&
// 			unlinkSync(`./public/audio/${product.beat}`);
// 		products = products.filter(
// 			(product) => product.productId !== +req.params.id
// 		);
// 		escribirJson(productsFilePath, products);
// 		res.redirect("/admin");
// 	}
// 	console.log("El producto no existe");
// 	res.redirect("/admin");
// };

// const db = require("../../database/models");
// const { existsSync, unlinkSync } = require("fs");

// module.exports = (req, res) => {
// 	db.Beat.findOne({
// 		where: {
// 			productId: req.params.id,
// 		},
// 	})
// 		.then((product) => {
// 			if (product) {
// 				existsSync(`./public/img/products/${product.image}`) &&
// 					unlinkSync(`./public/img/products/${product.image}`);
// 				existsSync(`./public/audio/${product.beat}`) &&
// 					unlinkSync(`./public/audio/${product.beat}`);
// 				return db.Beat.destroy({
// 					where: {
// 						id: req.params.id,
// 					},
// 				});
// 			} else {
// 				console.log("El producto no existe");
// 				throw new Error("El producto no existe");
// 			}
// 		})
// 		.then(() => {
// 			return res.redirect("/users/admin");
// 		})
// 		.catch((error) => {
// 			console.error(error);
// 			return res.redirect("/users/admin");
// 		});
// };

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

				return res.redirect("/admin");
			}

			console.log("El producto no existe");
			return res.redirect("/admin");
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send("Error interno del servidor");
	}
};
