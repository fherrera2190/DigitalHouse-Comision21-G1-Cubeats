const calculateTotal = (req) => {
  console.log(req.session.cart.products);
  req.session.cart.total = req.session.cart.products
    .map(({ price, quantity }) => price * quantity)
    .reduce((a, b) => a + b, 0);
  console.log(req.session.cart.total);
};

module.exports = {
  calculateTotal,
};
