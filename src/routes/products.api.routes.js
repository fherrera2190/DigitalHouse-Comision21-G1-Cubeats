const { getBeats } = require("../controllers/APIs/apiProducts.controller");
const router = require("express").Router();

router.get("/", getBeats);
//router.get("/", getBeatById);

module.exports = router;
