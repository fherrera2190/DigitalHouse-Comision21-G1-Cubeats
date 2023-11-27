const express = require("express");
const productAddValidator = require("../validations/productAddValidator");
const productsController = require("../controllers/productsController");
const router = express.Router();
const upload = require("../middlewares/upload");
const userCheck = require("../middlewares/userCheck");
const productEditValidator = require("../validations/productEditValidator");

/* /products */
//Listar Productos
router.get("/", productsController.index);
//Buscar Producto
router.get("/search", productsController.searchProduct);
router.get("/detail/:id", productsController.detail);

//Crear Productos
router.get("/add", userCheck, productsController.addProduct);
router.post(
	"/add",
	userCheck,
	upload.fields([
		{ name: "image", maxCount: 1 },
		{ name: "beat", maxCount: 1 },
	]),
	productAddValidator,
	productsController.storeProduct
);

//Modificar Productos
router.get("/edit/:id", userCheck, productsController.editProduct);
router.put(
	"/edit/:id",
	userCheck,
	// productEditValidator,
	upload.fields([
		{ name: "image", maxCount: 1 },
		{ name: "beat", maxCount: 1 },
	]),
	productEditValidator,
	productsController.update
);

router.delete("/delete/:id", userCheck, productsController.deleteProduct);

module.exports = router;
