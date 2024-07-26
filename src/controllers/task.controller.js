const { taskService } = require("../services");

const getUserTasks = async (req, res) => {
  const { user } = req;
  const tasks = await taskService.getUserTasks(user.id);
  res.json(tasks);
};

const getUserTask = async (req, res) => {
  const { user } = req;
  const { id } = req.params;
  const tasks = await taskService.getUserTask(id, user.id);
  res.json(tasks);
};

const createTask = async (req, res) => {
  try {
    const { user } = req;

    let task = await taskService.createTask(user.id, req.body);

    res.json({
      message: "Task is created successfully",
      task,
    });
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { user } = req;

    let task = await taskService.updateTask(req.params.id, user.id, req.body);

    res.json({
      message: "Task is updated successfully",
      task,
    });
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = req;

    await taskService.deleteTask(id, user.id);

    res.json({
      message: "Task is deleted successfully",
    });
  } catch (err) {
    res.status(400).json({ message: err?.message });
  }
};

module.exports = {
  getUserTasks,
  getUserTask,
  createTask,
  deleteTask,
  updateTask,
};
