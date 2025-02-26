module.exports = (req, res) => {
    req.session.destroy();
    res.clearCookie('CuBeatsX100pre');
    res.redirect('/');
}