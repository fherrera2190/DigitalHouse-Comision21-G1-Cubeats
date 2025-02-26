const { calculateTotal } = require("../../../utils/calculateTotal");


module.exports = async (req, res) => {
  try {
    if (!req.session.cart) {
      let error = new Error("Debe loguearte para comprar");
      error.status = 404;
      throw error;
    }

    const total = calculateTotal(req);

    return res.status(200).json({
      ok: true,
      data: req.session.cart,
      total,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Upss, hubo un error :(",
    });
  }
};
