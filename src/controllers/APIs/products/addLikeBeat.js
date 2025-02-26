const { addLikeBeat, deleteLike } = require("../../../services/beats.services");

module.exports = async (req, res) => {
  try {
    console.log(req.session.userLogged);
    if (!req.session.userLogged) {
      return res.status(404).json({
        ok: false,
        error: "Debes loguearte primero"
      });
    }

    const like = await addLikeBeat(req.query.id, req.session.userLogged.userId);
    if (like[1]) {
      return res.status(200).json({
        ok: true,
        message: "Like true"
      });
    }

    deleteLike(req.query.id, req.session.userLogged.userId);

    return res.status(200).json({
      ok: false,
      error: "Se elimino el like"
    });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      ok: false,
      status: error.status || 500,
      error: error.message || "Hubo un error"
    });
  }
};
