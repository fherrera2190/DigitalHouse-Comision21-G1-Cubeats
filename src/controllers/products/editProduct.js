const db = require("../../database/models");

module.exports = (req, res) => {
  const categories = db.Category.findAll();

  const products = db.Beat.findByPk(req.params.id, {
    include: {
      all: true,
    },
  });

  Promise.all([categories, products])

    .then(([categories, products]) => {
      return res.render("editbeat", {
        categories,
        ...products?.dataValues,
      });
    })
    .catch((error) => console.log(error));
};
