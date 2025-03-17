const sequelize = require("../config/database");
const User = require("./User");

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Database synced successfully");
  } catch (error) {
    console.error("Database sync error:", error);
  }
};

module.exports = { sequelize, User, syncDatabase };
