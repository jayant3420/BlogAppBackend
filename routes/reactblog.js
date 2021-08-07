const express = require("express");
const routerReactBlog = express.Router();
const userController = require("../controllers/userControllers");

routerReactBlog.get("/", userController.reactfixedpartdata);
routerReactBlog.get("/reactmaincontent", userController.reactmaincontent);
routerReactBlog.get("/footerlinks", userController.footerlinks);
routerReactBlog.get("/footerautordetails", userController.footerautordetails);
routerReactBlog.get("/reactsuggestiondata", userController.reactsuggestiondata);

module.exports = routerReactBlog;
