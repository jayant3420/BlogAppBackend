const express = require("express");
const routerHome = express.Router();
const userController = require("../controllers/userControllers");

routerHome.get("/", userController.navigation);
routerHome.get("/homecomp1", userController.homecomp1);
routerHome.get("/homecomp4", userController.homecomp4);
routerHome.get("/homecomp6", userController.homecomp6);
routerHome.get("/homecomp61lastcomp", userController.homecomp61lastcomp);
routerHome.get("/homecomp62lastcomp", userController.homecomp62lastcomp);
routerHome.get("/homecomp8", userController.homecomp8);

module.exports = routerHome;
