const { sequelize } = require("../database");
const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
