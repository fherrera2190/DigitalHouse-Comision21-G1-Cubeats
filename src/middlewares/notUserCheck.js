module.exports = (req,res,next) => {
    if(!req.session.userLogged){
        next()
    }else {
        return res.redirect(`/`)
    }
}