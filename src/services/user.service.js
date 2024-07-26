const { User } = require("../models");
const { hashPassword } = require("../utils/bcrypt.util");

const createUser = async (params) => {
  const { username, password } = params;
  const user = await User.findOne({ where: { username } });
  if (user) throw new Error("Username is already taken");

  const hash = await hashPassword(password);
  const result = await User.create({
    username,
    password: hash,
  });
  return result;
};

const getAllUser = async () => {
  const user = await User.findAll();
  return user;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

const getUserByUsername = async (username) => {
  let user = await User.findOne({ where: { username } });
  return user;
};

const updateUser = async (id, params) => {
  const { username, password } = params;

  const user = await User.findByPk(id);
  if (!user) throw new Error("User not found");

  if (username && username !== user.username) {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) throw new Error("Username is already taken");
  }

  let hash = user.password;
  if (password) {
    hash = await hashPassword(password);
  }

  const updatedUser = await user.update({
    username: username || user.username,
    password: hash,
  });

  return updatedUser;
};

const deleteUser = async (id) => {
  const user = await getUserById(id);
  if (!user) throw new Error("User not found");
  await user.destroy();
  return true;
};

module.exports = {
  createUser,
  getAllUser,
  getUserById,
  getUserByUsername,
  updateUser,
  deleteUser,
};
