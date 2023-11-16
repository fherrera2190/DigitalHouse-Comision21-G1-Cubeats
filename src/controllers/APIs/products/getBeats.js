const {
  getAllBeats,
  getBeatInnerCategory
} = require("../../../services/beats.services");

module.exports = async (req, res) => {
  try {
    let beats = await getAllBeats();

    const countByCategory = {};
    beats.forEach(beat => {
      if (countByCategory[beat.category.dataValues.name] === undefined) {
        countByCategory[beat.category.dataValues.name] = 1;
      } else {
        countByCategory[beat.category.dataValues.name]++;
      }
    });

    const products = beats.map(({ id, name, description, category }) => {
      return {
        id,
        name,
        description,
        category: {
          id: category.id,
          name: category.name
        },
        detail: `${req.protocol +
          "://" +
          req.get("host") +
          "/products/detail/" +
          id}`
      };
    });

    // console.log(probando);
    return res
      .status(200)
      .json({ count: beats.length, countByCategory, products });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      ok: false,
      status: error.status || 500,
      error: error.message || "Hubo un error"
    });
  }
};
