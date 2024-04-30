const myControllers = require("../controllers");
const routes = require("express").Router();

routes.get("/", myControllers.mainFunction);
routes.get("/secret", myControllers.secretFunction);
// get colleges
routes.get("/colleges", myControllers.getColleges);

module.exports = routes;
