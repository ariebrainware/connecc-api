'use strict';
module.exports = (sequelize, DataTypes) => {
  var user_log = sequelize.define('user_log', {
    username: DataTypes.STRING,
    token: DataTypes.STRING,
    is_login: DataTypes.BOOLEAN,
    last_login: DataTypes.DATE,
    logout_at: DataTypes.DATE
  }, {});
  user_log.associate = function(models) {
    // associations can be defined here
  };
  return user_log;
};