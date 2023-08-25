const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();
const uploadImage = require('../middlewares/uploadImage')
const uploadBeat= require('../middlewares/uploadBeat')
/* /products */
router.get('/', productsController.index);
router.get('/detail/:id', productsController.detail);
router.get('/add', productsController.addProduct);
router.post('/add',uploadImage.single('image'), productsController.storeProduct);
module.exports = router;

// ,uploadBeat.single('beat')