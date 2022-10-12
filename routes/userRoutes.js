const express = require("express");

const route = express.Router();

let userController = require("./../Controllers/userController");


route.post("/addUserData", userController.addUserData);

module.exports = route;
