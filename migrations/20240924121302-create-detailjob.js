'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detailjobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idJob: {
        type: Sequelize.INTEGER
      },
      waktujob: {
        type: Sequelize.STRING
      },
      lokasi: {
        type: Sequelize.STRING
      },
      jenislokasi: {
        type: Sequelize.STRING
      },
      jenisjob: {
        type: Sequelize.STRING
      },
      requirement: {
        type: Sequelize.STRING
      },
      responsibility: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('detailjobs');
  }
};