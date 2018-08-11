'use strict';
module.exports = (sequelize, DataTypes) => {
  var devTeam = sequelize.define('team_member', {
    name:{
      notNull:true, 
      type: DataTypes.STRING
    },
    gender: {
      notNull:true,
      type: DataTypes.ENUM('M','F')
    },
    title: {
      notNull:true,
      type: DataTypes.STRING
    },
    email: {
      isEmail:true,
      notNull:true,
      type: DataTypes.STRING
    },
    github: {
      isUrl:true,
      type: DataTypes.STRING
    }
  }, {});
  devTeam.associate = function(models) {
    // associations can be defined here
  };
  return devTeam;
};