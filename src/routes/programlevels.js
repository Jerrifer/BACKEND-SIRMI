const express = require("express");
const router = express.Router();

const {
    getProgramLevels,
    getProgramLevel
} = require("../controller/programLevels.controller");

router.get("/", getProgramLevels);
router.get("/:id", getProgramLevel);

module.exports = router;