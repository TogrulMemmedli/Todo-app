const { Task } = require("../models");

const createTask = async (userId, params) => {
  const { title, description, deadline, status } = params || {};

  let task = await Task.create({
    title,
    description,
    deadline,
    status,
    userId,
  });

  return task;
};

const getUserTasks = async (userId) => {
  const tasks = await Task.findAll({ where: { userId } });
  return tasks;
};

const getUserTask = async (id, userId) => {
  const task = await Task.findOne({ where: { id, userId } });
  return task;
};

const updateTask = async (id, userId, params) => {
  let { title, description, deadline, status } = params || {};

  let task = await getUserTask(id, userId);
  if (!task) throw new Error("Task is not found");

  title = title || task.title;
  description = description || task.description;
  deadline = deadline || task.deadline;
  status = status || task.status;

  let updatedTask = await task.update({ title, description, deadline, status });

  return updatedTask;
};

const deleteTask = async (id, userId) => {
  let task = await getUserTask(id, userId);

  if (!task) throw new Error("Task is not found");

  await task.destroy();
  return true;
};

module.exports = {
  createTask,
  getUserTask,
  getUserTasks,
  updateTask,
  deleteTask,
};
