'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Allcodes', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      key: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      value_en: {
        type: Sequelize.STRING,
      },
      value_id: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Allcodes')
  },
}
