const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const { leerJson } = require("../data/index");
const db = require("../database/models");

module.exports = {
  index: async (req, res) => {
    const products = await db.Beat.findAll();
    const categories = await db.Category.findAll();
    return res.render("index", { products, categories });
  },
  admin: (req, res) => {
    const products = leerJson(productsFilePath);
    return res.render("admin", { products });
  },
  search: (req, res) => {
    const keywords = req.query.keywords.toLowerCase();
    const products = leerJson(productsFilePath);
    const results = products.filter(
      ({ name, category }) =>
        name.toLowerCase().includes(keywords) ||
        category.toLowerCase().includes(keywords)
    );
    return res.render("admin", { products: results });
  }
};
