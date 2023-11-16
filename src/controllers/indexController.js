const db = require("../database/models");
const { Op } = require("sequelize");

module.exports = {
  index: async (req, res) => {
    try {
      const products = await db.Beat.findAll({
        include: ["category", "producer"]
      });
      const categories = await db.Category.findAll();
      // const products2 = products.map(({ dataValues }) => {
      //   //console.log(dataValues);
      //   beat = {
      //     productId: dataValues.id,
      //     name:dataValues.name,
      //     image: dataValues.image,
      //     producer:dataValues.producer.name
      //   };
      //   console.log(beat);
      //   return;
      // });
      //console.log(products2);
      // return res.json({ products });
      console.log(products[0].dataValues)
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
