const express = require("express");
const router = express.Router();

const {
    getThematicLines,
    getThematicLine
} = require("../controller/thematicLine.controller");

router.get("/", getThematicLines);
router.get("/:id", getThematicLine);

module.exports = router;