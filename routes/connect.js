const myControllers = require("../controllers");
const routes = require("express").Router();

routes.get("/", myControllers.mainFunction);
routes.get("/secret", myControllers.secretFunction);

module.exports = routes;
