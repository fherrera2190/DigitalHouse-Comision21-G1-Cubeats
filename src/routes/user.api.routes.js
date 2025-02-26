const {
  getUsers,
  getUserById,
  getUserByEmail,
  getUserByUsername,
} = require("../controllers/APIs/apiUsers.controller");
const router = require("express").Router();

router.get("/check-email", getUserByEmail);
router.get("/check-username", getUserByUsername);
router.get("/", getUsers);
router.get("/:id", getUserById);
// Ruta para verificar email

module.exports = router;
