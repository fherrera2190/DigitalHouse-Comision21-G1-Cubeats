const path = require("path");
const db = require("../../database/models");

module.exports = async (req, res) => {
  try {
    const categories = await db.Category.findAll({ order: ["name"] });
    return res.render("createBeats", { categories });
  } catch (error) {
    console.log(error);
  }
};
