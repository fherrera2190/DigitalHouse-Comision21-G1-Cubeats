const {
  getUsers,
  getUserById,
  getUserByEmail
} = require("../controllers/APIs/apiUsers.controller");
const router = require("express").Router();

router.get('/check-email', getUserByEmail);
router.get("/", getUsers);
router.get("/:id", getUserById);

module.exports = router;
