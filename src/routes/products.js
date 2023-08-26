const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();

/* /products */
router.get('/', productsController.index);
router.get('/detail/:id', productsController.detail);
router.get('/add',productsController.addProduct);
router.get('/edit/:id', productsController.editbeat); 
//router.put('/edit/:id', productsController.update); 

module.exports = router;
