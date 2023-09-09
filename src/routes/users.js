var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();

/* User Register */
router.get('/register', usersController.register);
router.post('/register', usersController.processRegister);

/* Login Register */
router.get('/login', usersController.login);
router.post('/login', usersController.processLogin);

/* User Profile */

/* User Logout */
router.get('/logout');

module.exports = router;
