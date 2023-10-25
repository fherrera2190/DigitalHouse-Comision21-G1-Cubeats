module.exports = (req, res, next) => {
	if (req.cookies.CuBeatsX100pre) {
		req.session.userLogged = req.cookies.CuBeatsX100pre;
	}
	next();
};
