const path = require('path');
const categoriesFilePath = path.join(__dirname, '../../data/categories.json');
const { leerJson } = require('../../data/index');


module.exports = (req, res) => {
    const categories = leerJson(categoriesFilePath);
    return res.render('createBeats', { categories });
}