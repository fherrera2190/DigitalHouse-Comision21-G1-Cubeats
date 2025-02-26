const { Op } = require("sequelize");
const db = require("../../database/models");

module.exports = async (req, res) => {
  try {
    const keywords = req.query.keywords.trim();
    const categories = await db.Category.findAll();
    const products = await db.Beat.findAll({
      include: ["category", "producer"],
      where: {
        [Op.or]: {
          name: {
            [Op.substring]: keywords,
          },
          description: {
            [Op.substring]: keywords,
          },
          "$category.name$": {
            [Op.substring]: keywords,
          },
        },
      },
    });

    if (req.session.userLogged) {
      let userAllLikes = await db.Like.findAll({
        where: {
          userId: req.session.userLogged.userId,
        },
      });
      console.log(userAllLikes);
      userAllLikes = userAllLikes.map((elemnt) => elemnt.dataValues.beatId);
      //userAllLikes.includes(1)
      const categories = await db.Category.findAll();
      return res.render("results", { products, categories, userAllLikes });
    }

    console.log(products.length);
    return res.render("results", { products, categories });
  } catch (error) {
    console.log(error);
  }
};
