'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_logs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(3)
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      token: {
        allowNull: false,
        type: Sequelize.STRING
      },
      is_login: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      last_login: {
        type: Sequelize.DATE
      },
      logout_at: {
        type: Sequelize.DATE
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_logs');
  }
};