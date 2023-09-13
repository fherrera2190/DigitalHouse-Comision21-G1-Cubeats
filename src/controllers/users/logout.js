module.exports = (req, res) => {
    req.session.destroy();
    res.clearCookie('userLogged');
    res.redirect('/');
}