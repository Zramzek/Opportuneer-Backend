'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jobsearches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCourse: {
        type: Sequelize.INTEGER
      },
      idAdmin: {
        type: Sequelize.INTEGER
      },
      namaperusahaan: {
        type: Sequelize.STRING
      },
      jobname: {
        type: Sequelize.STRING
      },
      available: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('jobsearches');
  }
};