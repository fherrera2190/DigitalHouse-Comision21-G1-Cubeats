const express = require("express");
const cartController = require("../controllers/cartController");
const router = express.Router();
const cartCheck = require("../middlewares/cartCheck");

router.get("/", cartCheck, cartController.index);

module.exports = router;
