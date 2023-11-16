const { getUserById } = require("../../../services/users.services");

module.exports = async (req, res) => {
  try {
    console.log(req.params.id);
    let user = await getUserById(req.params.id);
    user = {
      id: user.id,
      name: !user.name ? "-" : user.name,
      email: user.email,
      detail: `${req.protocol +
        "://" +
        req.get("host") +
        "/image/users/" +
        user.image}`
    };
    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      ok: false,
      status: error.status || 500,
      error: error.message || "Hubo un error"
    });
  }
};
