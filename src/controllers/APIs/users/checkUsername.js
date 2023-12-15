const { getUserByUsername } = require("../../../services/users.services");

module.exports = async (req, res) => {
  const username = req.query.username;
  //console.log(email);
  try {
    const user = await getUserByUsername(username);

    return res.status(200).json({
      ok: true,
      data: user ? true : false,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Hay un error",
    });
  }
};
