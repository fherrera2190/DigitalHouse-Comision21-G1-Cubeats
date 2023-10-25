const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../../database/models");

module.exports = (req, res) => {
  console.log(req.body);
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const newUser = {
      username: req.body.username.trim(),
      name: "",
      lastname: "",
      email: req.body.email.trim(),
      description: null,
      image: null,
      cover: null,
      roleId: req.body.role,
      password: bcrypt.hashSync(req.body.password.trim(), 10)
    };
    db.User
      .create(newUser)
      .then(user => {
        db.Address
          .create({
            userId: user.id
          })
          .then(() => {
            return res.redirect("/users/login");
          });
      })
      .catch(error => console.log(error));
  } else {
    res.render("register", {
      errors: errors.mapped(),
      old: req.body
    });
  }
};