const express = require("express");
const { addUser, getAllUsers } = require("../controllers/user.controller");

const Router = express.Router();

Router.post("/user", addUser);
Router.get("/getUsers", getAllUsers);

module.exports = Router;
