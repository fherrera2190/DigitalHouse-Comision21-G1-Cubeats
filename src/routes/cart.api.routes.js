const router = require("express").Router();
const {
  getCart,
  addItemToCart,
  deleteItemToCart,
  clearCart
} = require("../controllers/APIs/cartApi.controller");

router
  .get("/", getCart)
  .post("/", addItemToCart)
  .delete("/item", deleteItemToCart)
  .delete("/", clearCart);
module.exports = router;
