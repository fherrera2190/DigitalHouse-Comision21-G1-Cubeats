"use strict";
const productsJSON = require("../../data/products.json");

const productsDB = productsJSON.map(
  ({
    name,
    description,
    image,
    beat,
    price,
    like,
    licenceId,
    userId,
    categoryId
  }) => {
    return {
      name,
      description,
      image,
      beat,
      price,
      like,
      licenceId,
      categoryId,
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
