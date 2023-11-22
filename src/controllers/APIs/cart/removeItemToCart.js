const removeItemToCart = async (req, res) => {
    try {
      if (!req.session.cart) {
        let error = new Error("Error al cargar el carrito :(");
        error.status = 404;
        throw error;
      }
  
      const { product: id } = req.query;
  
      req.session.cart.products = req.session.cart.products.map(product => {
        if (product.id === +id && product.quantity > 1) {
          --product.quantity;
        }
        return product;
      });
  
      calculateTotal(req);
  
      return res.status(200).json({
        ok: true,
        data: req.session.cart,
        msg: "Producto eliminado exitosamente"
      });
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Upss, hubo un error :("
      });
    }
  };