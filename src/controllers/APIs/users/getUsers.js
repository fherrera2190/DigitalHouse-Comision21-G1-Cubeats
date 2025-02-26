const { getAllUsers } = require("../../../services/users.services");

module.exports = async (req, res) => {
  try {
    let users = await getAllUsers();

    users = users.map(({ id, name, email, username }) => {
      return {
        id,
        name: !name ? "-" : name,
        email,
        detail: `${req.protocol +
          "://" +
          req.get("host") +
          "/users/profile/" +
          username}`
      };
    });
    console.log(users);

    return res.status(200).json({ count: users.length, users });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      ok: false,
      status: error.status || 500,
      error: error.message || "Hubo un error"
    });
  }
};
