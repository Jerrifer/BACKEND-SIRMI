const express = require("express");
const router = express.Router();

const {
  createRegionale,
  getRegionales,
  getRegionale,
  updateRegionale,
  deleteRegionale,
} = require("../controller/regionale.controller");

router.get("/", getRegionales);

router.get("/:id", getRegionale);

router.post("/", createRegionale);

router.put("/:id", updateRegionale);

router.delete("/:id", deleteRegionale);

module.exports = router;
