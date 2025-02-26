"use strict";
const users = require("../../data/users.json");
const usersDB = users.map(
  ({
    username,
    first_name,
    last_name,
    email,
    description,
    image,
    cover,
    role,
    password
  }) => {
    return {
      username,
      first_name,
      last_name,
      email,
      description,
      image,
      cover,
      roleId:role,
      password,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }
);
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", usersDB, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  }
};
