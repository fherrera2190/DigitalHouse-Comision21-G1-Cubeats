const addItemToCart = async (req, res) => {
    try {
      if (!req.session.cart) {
        let error = new Error("Error al cargar el carrito :(");
        error.status = 404;
        throw error;
      }
  
      const { quantity, order, product: id } = req.body;
  
      const { title, price, discount, images } = await db.Product.findByPk(id, {
        include: ["images"]
      });
  
      let newProduct = {
        id,
        title,
        price,
        discount,
        image: images.find(image => image.main).file,
        quantity: +quantity || 1
      };
  
      if (req.session.cart.products.map(product => product.id).includes(id)) {
        req.session.cart.products = req.session.cart.products.map(product => {
          if (product.id === id) {
            ++product.quantity;
          }
          return product;
        });
      } else {
        req.session.cart.products.push(newProduct);
      }
  
      calculateTotal(req);
  
      return res.status(200).json({
        ok: true,
        data: req.session.cart,
        msg: "Producto agregado exitosamente"
      });
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Upss, hubo un error :("
      });
    }
  };