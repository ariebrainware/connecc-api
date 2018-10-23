'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('team_members', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      gender: {
        allowNull: false,
        type: Sequelize.ENUM('M','F')
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      email: {
        isEmail:true,
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      github: {
        isUrl:true,
        allowNull: false,
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('team_members');
  }
};