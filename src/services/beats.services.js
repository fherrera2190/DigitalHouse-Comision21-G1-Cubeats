const db = require("../database/models");

const getAllBeats = async () => {
  try {
    const beats = await db.Beat.findAll({
      include: ["category"]
    });
    return beats;
  } catch (error) {
    console.log(error);
    throw {
      status: 500,
      message: error.message
    };
  }
};

const getBeatById = async id => {
  try {
    const beat = await db.Beat.findByPk(id, {
      include: ["category"]
    });
    return beat;
  } catch (error) {
    console.log(error);
    throw {
      status: 500,
      message: error.message
    };
  }
};

module.exports = {
  getAllBeats,
  getBeatById
};
