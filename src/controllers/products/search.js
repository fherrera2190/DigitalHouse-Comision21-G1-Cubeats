const { Op } = require("sequelize");
const db = require("../../database/models");

module.exports = async (req, res) => {
  try {
    const keywords = req.query.keywords.trim();
    const categories = await db.Category.findAll();
    const products = await db.Beat.findAll({
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
    return res.render("results", { products, categories });
  } catch (error) {
    console.log(error);
  }
};
