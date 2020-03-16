const express = require("express");

const server = express();

const authRouter = require("./auth/auth-router.js");
const usersRouter = require("./users/users-router.js");


server.use(express.json());
server.use("/", authRouter);
server.use("/users", usersRouter);

module.exports = server;