const { getBeatById } = require("../../../services/beats.services");

module.exports = async (req, res) => {
  try {
    console.log(req.params.id);
    let beat = await getBeatById(req.params.id);
    console.log(beat);
    return res.status(200).json({});
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      ok: false,
      status: error.status || 500,
      error: error.message || "Hubo un error"
    });
  }
};
