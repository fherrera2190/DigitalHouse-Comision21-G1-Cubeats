var express = require('express');
const { login, processLogin } = require('../controllers/usersController');
const usersController = require('../controllers/usersController');
const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator');
var router = express.Router();

/* User Register */
router.get('/register', usersController.register);
router.post('/register', registerValidator, usersController.processRegister);

/* Login Register */
router.get('/login', login);
router.post('/login', loginValidator, processLogin);

/* User Profile */
router.get('/profile', usersController.profile);
router.put('/update', usersController.update);

/* User Logout */
router.get('/logout', usersController.logout);

module.exports = router;
