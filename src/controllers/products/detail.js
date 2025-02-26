const db = require("../../database/models");

module.exports = async (req, res) => {
  let product = await db.Beat.findByPk(req.params.id, {
    include: ["category", "producer"]
  });
  product = product.dataValues;
  if (req.session.userLogged) {
    let userAllLikes = await db.Like.findOne({
      where: {
        userId: req.session.userLogged.userId,
        beatId: product.id
      }
    });
    userAllLikes = userAllLikes ? userAllLikes.dataValues.beatId : [];
    const categories = await db.Category.findAll();
    return res.render("productDetail", {
      product,
      categories,
      userAllLikes: !userAllLikes ? userAllLikes : [userAllLikes]
    });
  }

  if (product) {
    const { username, image, cover } = product.producer.dataValues;
    return res.render("productDetail", {
      product: product,
      user: { username, image, cover }
    });
  } else {
    return res.redirect("/");
  }
};
