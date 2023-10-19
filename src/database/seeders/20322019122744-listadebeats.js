"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ArtistBeats",
      [
        {
          userId: 4,
          beatId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          userId: 4,
          beatId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          userId: 4,
          beatId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ArtistBeats", null, {});
  }
};
