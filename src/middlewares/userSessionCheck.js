module.exports = (req,res,next) => {
    res.locals.userLogged = req.session.userLogged && req.session.userLogged;
    next()
}