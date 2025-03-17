const express = require("express");
// const userRoutes = require("./routes/userRoutes"); 
//const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use("/users", require('./routes/userroutes'));
//app.use(errorHandler);

module.exports = app;
