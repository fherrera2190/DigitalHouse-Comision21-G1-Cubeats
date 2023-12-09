const db = require("../database/models");

module.exports = {
  index: async (req, res) => {
    try {
      const products = await db.Beat.findAll({
        include: ["category", "producer"]
      });
      //console.log(req.session.userLogged)
      if (req.session.userLogged) {
        let userAllLikes = await db.Like.findAll({
          where: {
            userId: req.session.userLogged.userId
          }
        });
        console.log(userAllLikes);
        userAllLikes = userAllLikes.map(elemnt => elemnt.dataValues.beatId);
        //userAllLikes.includes(1)
        const categories = await db.Category.findAll();
        return res.render("products", { products, categories, userAllLikes});
      }
      const categories = await db.Category.findAll();
      return res.render("products", { products, categories });
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
