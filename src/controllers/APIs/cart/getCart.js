const getCart = async (req, res) => {
    try {
      if (!req.session.cart) {
        let error = new Error("Error al cargar el carrito :(");
        error.status = 404;
        throw error;
      }
  
      return res.status(200).json({
        ok: true,
        data: req.session.cart,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Upss, hubo un error :(",
      });
    }
  };