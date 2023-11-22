const { validationResult } = require("express-validator");
const db = require("../../database/models");
const { existsSync, unlinkSync } = require("fs");

module.exports = async (req, res) => {
  try {

    const errors = validationResult(req);
    let { first_name, last_name, image, description } = req.body;
    console.log(req.body)
    const user = await db.User.findByPk(req.session.userLogged.userId);
    if (errors.isEmpty()) {
      first_name = req.body.first_name && req.body.first_name.trim();
      last_name = req.body.last_name && req.body.last_name.trim();

      if (req.files.image) {
        existsSync(`./public/img/users/${user.image}`) &&
          unlinkSync(`./public/img/users/${user.image}`);
        image = req.files.image[0].filename;
      }

      await user.update({
        first_name,
        last_name,
        image,
        description
      });

      return res.redirect("/");
    }
    console.log(description);
    if (req.files.image) {
      existsSync(`./public/img/users/${req.files.image[0].filename}`) &&
        unlinkSync(`./public/img/users/${req.files.image[0].filename}`);
    }
    console.log(errors.mapped());
    return res.render("myData", {
      userDatos: user.dataValues,
      errors: errors.mapped(),
      old: req.body
    });
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    return res.status(500).send("Error al actualizar el usuario");
  }
};
