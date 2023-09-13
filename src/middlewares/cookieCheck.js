module.exports = (req,res,next) => {
    if(req.cookies.userLogged){
        req.session.userLogged = req.cookies.userLogged
    }
    next()
}