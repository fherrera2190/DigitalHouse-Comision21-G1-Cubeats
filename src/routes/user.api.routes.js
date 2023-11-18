
const { getUsers, getUserById } = require("../controllers/APIs/apiUsers.controller");
const router =  require("express").Router();

router.get("/", getUsers);
router.get("/:id", getUserById);

module.exports = router;
