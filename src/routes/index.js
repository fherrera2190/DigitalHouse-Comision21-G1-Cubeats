const express = require('express');
const indexController = require('../controllers/indexController');
const router = express.Router();

/* GET home page. */
router.get('/', indexController.index);
router.get('/admin', indexController.admin);
module.exports = router;
