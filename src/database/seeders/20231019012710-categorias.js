"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Hip-Hop",
          image: "Hiphop.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "R&B",
          image: "RB.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Trap",
          image: "Trap.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "EDM",
          image: "Nightlovell.webp",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Pop",
          image: "Pop.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Rock",
          image: "Rock.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jazz",
          image: "Jazz.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Experimental",
          image: "Lilwayne1.webp",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Electro",
          image: "Electro.png",
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
