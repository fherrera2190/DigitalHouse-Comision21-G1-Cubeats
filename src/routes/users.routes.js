var express = require('express');
const { login, processLogin } = require('../controllers/usersController');
const usersController = require('../controllers/usersController');
const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator');
const notUserCheck = require('../middlewares/notUserCheck');
const userCheck = require('../middlewares/userCheck');
const uploadUserImages = require('../middlewares/uploadUserImages');
const editprofileValidator = require('../validations/editprofileValidator');

var router = express.Router();

/* User Register */
router.get('/register',notUserCheck, usersController.register);
router.post('/register', registerValidator, usersController.processRegister);
/* Login Register */
router.get('/login',notUserCheck, login);
router.post('/login',loginValidator, processLogin);

/* User Profile */
router.get('/profile/:username',userCheck, usersController.profile);
router.put('/profile/update/:username',userCheck ,uploadUserImages.fields([{ name: "image", maxCount: 1 }, { name: "cover", maxCount: 1 }]),editprofileValidator,usersController.editProfile);

/* User Logout */
router.get('/logout', usersController.logout);

module.exports = router;
