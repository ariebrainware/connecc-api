'use strict';
module.exports = (sequelize, DataTypes) => {
  var team_member = sequelize.define('team_member', {
    name: {
      notNull: true,
      type: DataTypes.STRING(50)
    },
    gender: {
      notNull: true,
      type: DataTypes.ENUM('M', 'F')
    },
    title: {
      notNull: true,
      type: DataTypes.STRING(50)
    },
    email: {
      isEmail: true,
      notNull: true,
      type: DataTypes.STRING(100)
    },
    github: {
      isUrl: true,
      type: DataTypes.STRING
    }
  }, {});
  team_member.associate = function (models) {
    // associations can be defined here
  };
  return team_member;
};