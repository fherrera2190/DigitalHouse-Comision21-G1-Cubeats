const { validationResult } = require("express-validator");
const db = require("../../database/models");

module.exports = async (req, res) => {
  const errors = validationResult(req);
  console.log(errors.isEmpty());
  try {
    if (errors.isEmpty()) {
      const user = await db.User.findOne({
        where: {
          email: req.body.email
        }
      });
      req.session.userLogged = {
        userId: user.id,
        username: user.username,
        role: user.role
      };

      req.body.remember !== undefined &&
        res.cookie("CuBeatsX100pre", req.session.userLogged, {
          maxAge: 1000 * 60 * 5
        });

      return res.redirect("/");
    } else {
      res.render("login", {
        errors: errors.mapped(),
        old: req.body
      });
    }
  } catch (error) {
    console.log(error);
  }
};
