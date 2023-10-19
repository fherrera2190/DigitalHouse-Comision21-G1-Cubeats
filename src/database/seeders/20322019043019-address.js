"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Addresses",
      [
        {
          address: "Calle 1",
          city: "Ciudad 1",
          province: "Provincia 1",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          address: "Calle 2",
          city: "Ciudad 2",
          province: "Provincia 2",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          address: "Calle 3",
          city: "Ciudad 3",
          province: "Provincia 3",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Addresses", null, {});
  }
};
