// const { leerJson, existsSync, escribirJson, unlinkSync } = require("../../data");
// const { validationResult } = require("express-validator");
// const path = require('path');
// const productsFilePath = path.join(__dirname, '../../data/products.json');
// const categoriesFilePath = path.join(__dirname, '../../data/categories.json');

// module.exports = (req, res) => {
//     const errors = validationResult(req);
//     //const { title, price, category, description } = req.body;
//     console.log(req.body)
//     const products = leerJson(productsFilePath);
//     console.log(req.files.image);

//     if (errors.isEmpty()) {
//         const { title, price, category, description } = req.body;// toda la logica que teníamos la metí adentro de este if
//         const productModify = products.find(product => product.productId === +req.params.id)
//         if (productModify) {
//             productModify.name = title.trim()
//             productModify.description = description
//             productModify.price = +price
//             productModify.category = category
//             if (req.files.image) {
//                 existsSync(`./public/img/products/${productModify.image}`) && unlinkSync(`./public/img/products/${productModify.image}`);
//                 productModify.image = req.files.image[0].filename
//             }
//             if (req.files.beat) {
//                 existsSync(`./public/audio/${productModify.beat}`) && unlinkSync(`./public/audio/${productModify.beat}`);
//                 productModify.beat = req.files.beat[0].filename
//             }
//         }

//         console.log(productModify);
//         escribirJson(productsFilePath, products)
//         return res.redirect('/')

//     } else {
//         const categories = leerJson(categoriesFilePath);
//         (req.files.beat && existsSync(`./public/audio/${req.files.beat[0].filename}`)) && unlinkSync(`./public/audio/${req.files.beat[0].filename}`);

//         if (req.files.beat) {
//             req.files.beat.forEach(file => {
//                 existsSync(`./public/audio/${file.filename}`) && unlinkSync(`./public/audio/${file.filename}`)
//             })
//         }

//        const product = products.find(product => product.productId === +req.params.id)

//         return res.render('editbeat', {
//             categories,
//             ...product,
//             errors: errors.mapped(),
//             old: req.body
//         })
//     }

// }
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

			console.log(productModify.category);
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
		}

		// ... código para el caso de errores
	} catch (error) {
		console.error(error);
		res.status(500).send("Error interno del servidor");
	}
};
