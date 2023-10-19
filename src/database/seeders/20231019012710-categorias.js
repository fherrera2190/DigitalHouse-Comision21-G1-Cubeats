"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Hip-Hop",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "R&B",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Trap",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "EDM",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Pop",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Rock",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jazz",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Experimental",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Electro",
          image: null,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  }
};
