const db = require("../../../database/models");

module.exports = async (req, res) => {
  try {
    
    if (!req.session.cart) {
      let error = new Error("Debe loguearte para comprar");
      error.status = 404;
      throw error;
    }
    
    const { product: id } = req.body;

    const { name, price, discount, images } = await db.Beat.findByPk(id);

    let newProduct = {
      id,
      name,
      price,
      quantity: 1
    };
    const array = req.session.cart.products.map(product => product.id);

    if (array.includes(id)) {
      
      return res
        .status(200)
        .json({ message: "Ya exite este producto en tu carrito" });
    } else {
      req.session.cart.products.push(newProduct);

      await db.Item.create({
        orderId: req.session.cart.orderId,
        beatId: id,
        quantity: 1
      });
    }

    //calculateTotal(req);

    return res.status(200).json({
      ok: true,
      data: req.session.cart,
      msg: "Producto agregado exitosamente"
    });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      ok: false,
      data: null,
      msg: error.message || "Upss, hubo un error :("
    });
  }
};
