const db = require("../../../database/models");

module.exports = async (req, res) => {
	try {
		if (!req.session.cart) {
			let error = new Error("Debe loguearte para comprar");
			error.status = 404;
			throw error;
		}

		const { product: id } = req.body;

		const { name, price, discount, image, producer } = await db.Beat.findByPk(
			id,
			{
				include: ["category", "producer"],
			}
		);
		console.log(producer);
		let newProduct = {
			id,
			username: producer.dataValues.username,
			name,
			image,
			price,
			quantity: 1,
		};
		const array = req.session.cart.products.map((product) => product.id);

		if (array.includes(id)) {
			return res
				.status(200)
				.json({ ok: false, message: "Ya exite este producto en tu carrito" });
		} else {
			req.session.cart.products.push(newProduct);

			await db.Item.create({
				orderId: req.session.cart.orderId,
				beatId: id,
				quantity: 1,
			});
		}

		//calculateTotal(req);

		return res.status(200).json({
			ok: true,
			data: req.session.cart,
			msg: "Producto agregado exitosamente.",
		});
	} catch (error) {
		console.log(error);
		return res.status(error.status || 500).json({
			ok: false,
			data: null,
			msg: error.message || "Upss, hubo un error :(",
		});
	}
};
