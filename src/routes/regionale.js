const express = require("express");
const router = express.Router();

const {
  getRegionales,
  getRegionale,
} = require("../controller/regionale.controller");

router.get("/", getRegionales);

router.get("/:id", getRegionale);

module.exports = router;
