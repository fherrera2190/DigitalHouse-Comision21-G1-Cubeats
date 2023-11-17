const { Op } = require("sequelize");
const db = require("../../database/models");

module.exports = async (req, res) => {
  try {

    const keywords = req.query.keywords.trim();
    const categories = await db.Category.findAll();
    const products = await db.Beat.findAll({
      include: ["category","producer"],
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
    console.log(products.length);
    return res.render("results", { products, categories });
  } catch (error) {
    console.log(error);
  }
};
