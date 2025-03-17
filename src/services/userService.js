const { User } = require("../models");

const createUser = async (data) => await User.create(data);

const getUsers = async () => await User.findAll();

const getUserById = async (id) => await User.findByPk(id);

const updateUser = async (id, data) => {
  const user = await User.findByPk(id);
  return user ? await user.update(data) : null;
};

const deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (!user) return null;
  await user.destroy();
  return user;
};

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };
