const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();
const upload = require('../middlewares/upload')


/* /products */
router.get('/', productsController.index);
router.get('/search', productsController.searchProduct);
router.get('/detail/:id', productsController.detail);
router.get('/add', productsController.addProduct);
router.post('/add', upload.fields([{ name: "image", maxCount: 1 }, { name: "beat", maxCount: 1 }]), productsController.storeProduct);
router.put('/edit/:id', upload.fields([{ name: "image", maxCount: 1 }, { name: "beat", maxCount: 1 }]), productsController.update);
router.get('/edit/:id', productsController.editProduct); 
router.delete('/delete/:id', productsController.deleteProduct);

module.exports = router;

