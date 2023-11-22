const calculateTotal = req => {
  req.session.cart.total = req.session.cart.products
    .map(
      ({ price, discount, quantity }) =>
        (price - price * discount / 100) * quantity
    )
    .reduce((a, b) => a + b, 0);
};
