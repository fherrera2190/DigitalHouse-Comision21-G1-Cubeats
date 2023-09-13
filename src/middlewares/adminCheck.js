module.exports = (req, res, next) => {
    if (req.session.userLogged && req.session.userLogged.role === "admin") {
        next()
    } else {
        return res.redirect('/')
    }
}