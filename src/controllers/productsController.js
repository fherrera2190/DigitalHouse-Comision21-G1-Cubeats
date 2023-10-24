const db = require("../database/models");

module.exports = {
  index: async (req, res) => {
    try {
      const products = await db.Beat.findAll({
        include: ["category"]
      });
      return res.render("products", { products });
    } catch (error) {
      console.log(error);
    }
  },
  detail: require("./products/detail"),
  addProduct: require("./products/addProduct"),
  storeProduct: require("./products/storeProduct"),
  searchProduct: require("./products/search"),
  deleteProduct: require("./products/deleteProduct"),
  editProduct: require("./products/editProduct"),
  update: require("./products/update")
};
