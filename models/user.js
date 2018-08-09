'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.TEXT
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};