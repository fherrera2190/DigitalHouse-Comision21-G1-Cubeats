const db = require("../database/models");
const { Op } = require("sequelize");

module.exports = {
  index: async (req, res) => {
    try {
      const products = await db.Beat.findAll({
        include: ["category", "producer"],
        order: [["like", "DESC"]],
        limit: 4
      });
      const categories = await db.Category.findAll();
      return res.render("index", { products, categories });
    } catch (error) {
      console.log(error);
    }
  },
  admin: async (req, res) => {
    try {
      const products = await db.Beat.findAll({
        include: ["category"]
      });
      return res.render("admin", { products });
    } catch (error) {
      console.log(error);
    }
  },
  search: async (req, res) => {
    try {
      const keywords = req.query.keywords.trim();
      const categories = await db.Category.findAll();
      const products = await db.Beat.findAll({
        include: ["category"],
        where: {
          [Op.or]: {
            name: {
              [Op.substring]: keywords
            },
            description: {
              [Op.substring]: keywords
            }
          }
        }
      });
      return res.render("admin", { products, categories });
    } catch (error) {
      console.log(error);
    }
  }
};
