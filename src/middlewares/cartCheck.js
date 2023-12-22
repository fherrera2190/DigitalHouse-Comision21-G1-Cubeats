module.exports = (req, res, next) => {
	if (req.session.userLogged && req.session.userLogged.role === 2) {
		next();
	} else {
		return res.redirect("/products");
	}
};
