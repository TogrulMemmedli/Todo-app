const { sequelize } = require("../database");
const { DataTypes } = require("sequelize");

const Task = sequelize.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  deadline: {
    type: DataTypes.DATE,
  },
  Status: {
    type: DataTypes.ENUM("Not Started", "Actual", "Finished"),
  },
});

module.exports = Task;
