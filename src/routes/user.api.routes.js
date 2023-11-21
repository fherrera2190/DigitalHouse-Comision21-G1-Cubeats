
const { getUsers, getUserById} = require("../controllers/APIs/apiUsers.controller");
const { checkEmail } = require("../controllers/APIs/users/checkEmail");
const router =  require("express").Router();


router.get('/check-email', checkEmail);
router.get("/", getUsers);
router.get("/:id", getUserById);
// Ruta para verificar email


module.exports = router;
