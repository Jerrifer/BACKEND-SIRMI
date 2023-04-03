const express = require("express");
const router = express.Router();

const {
    getTypePrograms,
    getTypeProgram
} = require("../controller/typeProgram.controller");

router.get("/", getTypePrograms);
router.get("/:id", getTypeProgram);

module.exports = router;