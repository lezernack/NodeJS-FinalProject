const express = require("express");
const router = express.Router();

const CollegeController = require("../controllers/index");

router.get("/", CollegeController.getColleges);

router.get("/:id", CollegeController.getACollege);

router.get("/", CollegeController.createCollege);

module.exports = router;
