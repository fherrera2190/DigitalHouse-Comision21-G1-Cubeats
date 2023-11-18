module.exports = (req, res, next) => {
	if (req.session.userLogged) {
		return res.redirect("/products");
	} else {
		next();
	}
};
