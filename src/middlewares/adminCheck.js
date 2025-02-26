module.exports = (req, res, next) => {
    if (req.session.userLogged && req.session.userLogged.role ===1) {
        next()
    } else {
        return res.redirect('/')
    }
}