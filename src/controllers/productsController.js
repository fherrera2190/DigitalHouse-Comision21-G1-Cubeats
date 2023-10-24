const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const { leerJson } = require("../data/index");
const db = require("../database/models");

module.exports = {
  index: async (req, res) => {
    const products = await db.Beat.findAll();
    const categories = await db.Category.findAll();
    return res.render("products", { products, categories });
  },
  detail: require("./products/detail"),
  addProduct: require("./products/addProduct"),
  storeProduct: require("./products/storeProduct"),
  searchProduct: require("./products/search"),
  deleteProduct: require("./products/deleteProduct"),
  editProduct: require("./products/editProduct"),
  update: require("./products/update")
};
