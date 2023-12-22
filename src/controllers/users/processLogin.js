const { validationResult } = require("express-validator");
const db = require("../../database/models");
const { Op } = require("sequelize");

module.exports = async (req, res) => {
	const errors = validationResult(req);

	try {
		req.body.remember = "on";
		if (errors.isEmpty()) {
			let user = await db.User.findOne({
				where: {
					[Op.or]: [
						{ email: req.body.emailOrUsername },
						{ username: req.body.emailOrUsername },
					],
				},
			});
			user = user.dataValues;
			req.session.userLogged = {
				userId: user.id,
				username: user.username,
				last_name: user.last_name,
				role: user.roleId,
				image: user.image,
			};

			req.body.remember !== undefined &&
				res.cookie("CuBeatsX100pre", req.session.userLogged, {
					maxAge: 1000 * 60 * 15,
				});
			if (user.roleId === 2) {
				const order = await db.Order.findOne({
					where: {
						userId: user.id,
						statusId: 1,
					},
					include: [
						{
							association: "items",
							include: [
								{
									association: "beat",
								},
							],
						},
					],
				});

				if (order) {
					req.session.cart = {
						orderId: order.id,
						total: order.total,
						products: order.items.map(
							({ quantity, beat: { id, name, price } }) => {
								return {
									id,
									name,
									price,
									quantity,
								};
							}
						),
					};
					console.log(req.session);
					return res.redirect("/");
				} else {
					const order = await db.Order.create({
						total: 0,
						userId: user.id,
						statusId: 1,
					});
					if (order) {
						req.session.cart = {
							orderId: order.id,
							total: order.total,
							products: [],
						};
					}

					return res.redirect("/");
				}
			}

			return res.redirect("/");
		} else {
			return res.render("login", {
				errors: errors.mapped(),
				old: req.body,
			});
		}
	} catch (error) {
		console.log(error);
	}
};
