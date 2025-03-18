const userService = require("../services/userService");

const createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    res.json({
      code:200,
      message:"User Created Successfully",
      data:user,
    });
  } catch (error) {
    res.json({ code: 500, message: "Internal Server Error", error: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.json({ code: 200, message: "Users fetched successfully", data: users });
  } catch (error) {
    res.json({ code: 500, message: "Internal Server Error", error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    user ? res.json({ code:200,message: "User found",data:user}) : res.json({ code:404,message: "User not found",data:user});
  } catch (error) {
    res.json({ code: 500, message: "Internal Server Error", error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    user ? res.json({ code:200,message: "User data updated",data:user}) : res.json({ code:404,message: "User not found" });
  } catch (error) {
    res.json({ code: 500, message: "Internal Server Error", error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    user ? res.json({ code:200,message: "User deleted successfully",data:user }) : res.json({ message: "User not found",data:user});
  } catch (error) {
    res.json({ code: 500, message: "Internal Server Error", error: error.message });
  }
};

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };
