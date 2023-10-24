const db = require("../../database/models");

module.exports = async (req, res) => {
  //   console.log(req.params.username);
  //   console.log(req.body);

  // const users = leerJson(usersFilePath);
  let userFind = await db.User.findOne({
    where: {
      username: req.params.username
    }
  });
  //   console.log(userfind);

  if (!userFind) {
    console.log("Usuario no encontrado");
    return res.redirect("/"); //Mandar a 404 con msj user No exists
  }
  console.log(userFind);
  userFind = userFind.dataValues;
  console.log(userFind);
  const userDatos = {
    username: userFind.username,
    name: userFind.name,
    lastname: userFind.lastname,
    description: userFind.description,
    image: userFind.image,
    cover: userFind.cover,
    date: userFind.date
  };
//   const productsFilter = products.filter(
//     product => product.userId === userFind.userId
//   );
  if (userFind) {
    return res.render("profile", {
      products: productsFilter,
      userDatos
    });
  }
  res.redirect("/");
};


