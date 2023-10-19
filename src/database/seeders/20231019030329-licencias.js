"use strict";

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Licences",
      [
        {
          name: "Non-Exclusive License",
          description:
            "Esta licencia te permite utilizar la música, pero el productor o creador de beats puede seguir vendiendo la misma pista a otros clientes. No tienes exclusividad sobre la pista. Uso: Puedes usar la música en tu proyecto, como canciones, videos, podcasts, etc., según los términos de la licencia, pero debes respetar las limitaciones especificadas.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Limited Use License",
          description:
            " Esta licencia establece restricciones específicas sobre cómo puedes utilizar la música, como la cantidad de copias que puedes distribuir o la duración de tu proyecto. Uso: Útil si tienes un proyecto con requisitos específicos y quieres controlar exactamente cómo se utiliza la música.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Free Use License",
          description:
            "Algunos productores ofrecen pistas de beats de forma gratuita con ciertas restricciones. Puedes usar la música de manera limitada o no lucrativa sin costo, pero aún debes seguir los términos de la licencia. Uso: Ideal para proyectos personales o sin fines de lucro donde no deseas invertir en música.",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Licences", null, {});
  }
};
