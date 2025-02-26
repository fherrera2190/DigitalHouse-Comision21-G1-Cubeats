const {
  getBeats,
  getBeatById,
  addLikeBeat
} = require("../controllers/APIs/apiProducts.controller");
const router = require("express").Router();

router.get("/", getBeats);
router.get("/like", addLikeBeat);
router.get("/:id", getBeatById);

module.exports = router;
