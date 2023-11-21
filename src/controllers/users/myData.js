const db = require("../../database/models");

module.exports = async (req, res) => {
  let userFind = await db.User.findOne({
    where: {
      username: req.params.username
    }
  });

  if (userFind) {
    return res.render("myData", {
      userDatos: userFind.dataValues
    });
  }
  return res.redirect("/");
};
