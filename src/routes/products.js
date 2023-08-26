const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();
const uploadBeat = require('../middlewares/uploadBeat')


/* /products */
router.get('/', productsController.index);
router.get('/detail/:id', productsController.detail);
router.get('/add', productsController.addProduct);
router.post('/add', uploadBeat.fields([{ name: "image", maxCount: 1 }, { name: "beat", maxCount: 1 }]), productsController.storeProduct);
module.exports = router;

// ,uploadImage.single('image')