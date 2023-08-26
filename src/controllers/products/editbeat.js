const { readJSON } = require("../../data");

module.exports =  (req, res) => {
    
    const products = readJSON("products.json");
    const users = readJSON('users.json');
    const categories = readJSON('categories.json');
    const product = products.find((product) => product.productId === +req.params.productId);
    return res.render("editbeat", {
        users,
        categories,
      ...product,
    });
}
