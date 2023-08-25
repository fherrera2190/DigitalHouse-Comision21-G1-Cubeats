const { leerJson, escribirJson, exists } = require('../../data/index');

module.exports = (req,res) => {
    return res.render('createBeats')
}