const express = require('express');
const indexController = require('../controllers/indexController');
const adminCheck = require('../middlewares/adminCheck');
const userCheckHome = require('../middlewares/userCheckHome');
const router = express.Router();

/* GET home page. */
router.get('/',userCheckHome, indexController.index);
router.get('/admin',adminCheck, indexController.admin);
router.get('/search', indexController.search);
module.exports = router;
