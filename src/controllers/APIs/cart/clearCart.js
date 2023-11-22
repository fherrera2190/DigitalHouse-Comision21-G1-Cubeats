const clearCart = async (req, res) => {
    try {
      if (!req.session.cart) {
        let error = new Error("Error al cargar el carrito :(");
        error.status = 404;
        throw error;
      }
  
      req.session.cart.products = [];
  
      calculateTotal(req);
  
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