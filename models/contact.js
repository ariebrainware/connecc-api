'use strict';
module.exports = (sequelize, DataTypes) => {
  var contact = sequelize.define('contact', {
    name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  contact.associate = function(models) {
    // associations can be defined here
  };
  return contact;
};