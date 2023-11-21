const db = require("../database/models");

const getAllUsers = async () => {
  try {
    const users = await db.User.findAll();
    return users;
  } catch (error) {
    console.log(error);
    throw {
      status: 500,
      message: error.message
    };
  }
};

const getUserById = async id => {
  try {
    const user = await db.User.findByPk(id);
    return user;
  } catch (error) {
    console.log(error);
    throw {
      status: 500,
      message: error.message
    };
  }
};
const getUserByEmail = async email => {
  try {
    const user = await db.User.findOne({
      where: {
        email
      }
    });
    return user;
  } catch (error) {
    console.log(error);
    throw {
      status: 500,
      message: error.message
    };
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail
};
