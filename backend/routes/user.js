const express = require("express");
const { addUser } = require("../controllers/user.controller");

const Router = express.Router();

Router.post("/user", addUser);

module.exports = Router;
