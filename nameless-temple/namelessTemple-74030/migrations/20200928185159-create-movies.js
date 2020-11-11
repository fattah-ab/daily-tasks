'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      synopsis: {
        type: Sequelize.TEXT
      },
      trailer: {
        type: Sequelize.STRING
      },
      poster: {
        type: Sequelize.STRING
      },
      backdrop: {
        type: Sequelize.STRING
      },

      category: {
        type: Sequelize.STRING
      },
      release_date: {
        type: Sequelize.STRING
      },
      director: {
        type: Sequelize.STRING
      },
      featured_song: {
        type: Sequelize.STRING
      },
      budget: {
        type: Sequelize.STRING
      },
      rating: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('movies');
  }
};