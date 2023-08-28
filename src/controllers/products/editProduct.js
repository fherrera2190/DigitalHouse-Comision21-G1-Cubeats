const path = require('path');
const productsFilePath = path.join(__dirname, '../../data/products.json');
const { leerJson } = require('../../data/index');
const categoriesFilePath = path.join(__dirname, '../../data/categories.json');
module.exports =  (req, res) => {
    
    const products = leerJson(productsFilePath);
    //const users = leerJson('users.json');
    const categories = leerJson(categoriesFilePath);
    const product = products.find((product) => product.productId === +req.params.id);
    return res.render("editbeat", {
        categories,
      ...product,
    });
}
