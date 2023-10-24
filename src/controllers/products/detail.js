const db = require("../../database/models");

module.exports = async (req, res) => {
  const product = await db.Beat.findByPk(req.params.id, {
    include: ["category", "producer"]
  });
  if (product) {
    const { username, image, cover } = product.dataValues.producer.dataValues;
    return res.render("productDetail", {
      ...product.dataValues,
      user: { username, image, cover }
    });
  } else {
    return res.redirect("/");
  }
};
