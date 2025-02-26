const db = require("../../../database/models");

module.exports = async (req, res) => {
  try {
    if (!req.session.cart) {
      let error = new Error("Debe loguearte para comprar");
      error.status = 404;
      throw error;
    }

    req.session.cart.products = [];

    //calculateTotal(req);

    /* base de datos */

    await db.Item.destroy({
      where: {
        orderId: req.session.cart.orderId
      }
    });

    return res.status(200).json({
      ok: true,
      data: req.session.cart,
      msg: "Carrito vaciado con éxito"
    });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Upss, hubo un error :("
    });
  }
};
