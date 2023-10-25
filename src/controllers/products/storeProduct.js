const { validationResult } = require("express-validator");
const db = require("../../database/models");

module.exports = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    if (!req.files.beat) {
      existsSync(`./public/img/products/${req.files.image[0].filename}`) &&
        unlinkSync(`./public/img/products/${req.files.image[0].filename}`);
      return res.redirect("/products/add");
    }
    const newProduct = {
      name: req.body.title,
      producerId: req.session.userLogged.userId,
      categoryId: req.body.category,
      description: req.body.description,
      image: req.files.image ? req.files.image[0].filename : null,
      beat: req.files.beat[0].filename,
      price: req.body.price,
      licenceId: 1,
      like: 0
    };
    await db.Beat.create(newProduct);
    res.redirect("/");
  } else {
    try {
      const categories = await db.Category.findAll({ order: ["name"] });
      req.files.image &&
        existsSync(`./public/img/products/${req.files.image[0].filename}`) &&
        unlinkSync(`./public/img/products/${req.files.image[0].filename}`);
      req.files.beat &&
        existsSync(`./public/audio/${req.files.beat[0].filename}`) &&
        unlinkSync(`./public/audio/${req.files.beat[0].filename}`);
      return res.render("createBeats", {
        categories,
        errors: errors.mapped(),
        old: req.body
      });
    } catch (error) {
      console.log(error);
    }
  }
};
