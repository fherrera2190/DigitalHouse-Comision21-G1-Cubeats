"use strict";
const productsJSON = require("../../data/products.json");

const productsDB = productsJSON.map(
  ({ name, description, image, beat, price, like, licenceId, userId }) => {
    return {
      name,
      description,
      image,
      beat,
      price,
      like,
      licenceId,
      categoryId: 1,
      producerId: userId,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }
);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Beats", productsDB, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Beats", null, {});
  }
};
