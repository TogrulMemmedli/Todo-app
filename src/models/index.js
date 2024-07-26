require("../database");
const User = require("./user.model");
const Task = require("./task.model");

User.hasMany(Task, { foreignKey: "userId", onDelete: "CASCADE" });
Task.belongsTo(User, { foreignKey: "userId" });

module.exports = {
  User,
  Task,
};
