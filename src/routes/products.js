const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();
const upload = require('../middlewares/upload');
const userCheck = require('../middlewares/userCheck');


/* /products */
//Listar Productos
router.get('/', productsController.index);
//Buscar Producto
router.get('/search', productsController.searchProduct);
router.get('/detail/:id', productsController.detail);

//Crear Productos
router.get('/add',userCheck, productsController.addProduct);
router.post('/add',userCheck, upload.fields([{ name: "image", maxCount: 1 }, { name: "beat", maxCount: 1 }]), productsController.storeProduct);

//Modificar Productos
router.get('/edit/:id',userCheck, productsController.editProduct); 
router.put('/edit/:id',userCheck, upload.fields([{ name: "image", maxCount: 1 }, { name: "beat", maxCount: 1 }]), productsController.update);


router.delete('/delete/:id', productsController.deleteProduct);

module.exports = router;

