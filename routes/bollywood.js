const express = require("express");
const routerBollywood = express.Router();
const userController = require("../controllers/userControllers");

routerBollywood.get("/", userController.bollywoodleft);
routerBollywood.get("/bollywoodright", userController.bollywoodright);

module.exports = routerBollywood;
