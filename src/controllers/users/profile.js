const db = require("../../database/models");

module.exports = async (req, res) => {
  let userFind = await db.User.findOne({
    where: {
      username: req.params.username
    }
  });

  if (!userFind) {
    console.log("Usuario no encontrado");
    return res.redirect("/"); //Mandar a 404 con msj user No exists
  }

  userFind = userFind.dataValues;
  const products = await db.Beat.findAll({
    include: ["category", "producer"],
    where: {
      producerId: userFind.id
    }
  });
  const userDatos = {
    username: userFind.username,
    name: userFind.name,
    lastname: userFind.lastname,
    description: userFind.description,
    image: userFind.image,
    cover: userFind.cover,
    date: userFind.date
  };
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
    return res.render("profile", { products, userDatos, userAllLikes });
  }
  if (userFind) {
    return res.render("profile", {
      products,
      userDatos
    });
  }
  return res.redirect("/");
};
