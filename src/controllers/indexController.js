module.exports = {
    index: (req, res) => {
        res.render('index');
    },
    admin: (req, res) => {
        res.render('admin');
    },
    editProduct: (req, res) => {
        res.render('editBeat');
    }
}