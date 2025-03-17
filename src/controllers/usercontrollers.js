const userService = require("../services/userService");

const createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    console.log(user);
    res.status(201).json(user);
  } catch (error) {
    console.log("hello");
    next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    res.json(await userService.getUsers());
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    user ? res.json(user) : res.status(404).json({ message: "User not found" });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    user ? res.json(user) : res.status(404).json({ message: "User not found" });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    user ? res.json({ message: "User deleted successfully" }) : res.status(404).json({ message: "User not found" });
  } catch (error) {
    next(error);
  }
};

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };
