const { param } = require("../routes");
const { userService } = require("../services/index");

const createUser = async (req, res) => {
  try {
    const params = req.body;
    console.log(req.body);
    let user = await userService.createUser(params);
    res.status(200).json({
      status: true,
      message: "User Created Successfully",
      user,
    });
  } catch (error) {
    res.status(409).json({
      message: error?.message,
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    let users = await userService.getAllUser();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    let user = await userService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    let user = await userService.updateUser(req.params.id, req.body);
    res.status(201).json({
      status: true,
      message: "Updated Successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    let user = await userService.deleteUser(id);
    res.status(200).json({
      status: true,
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
};
