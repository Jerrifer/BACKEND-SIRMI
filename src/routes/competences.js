const express = require("express");
const router = express.Router();

const {
  createcompetences,
  getcompetences,
  updatecompones,
  deletecompones,
  getcompetence,
} = require("../controller/competences.controller");

router.get("/", getcompetences);

router.get("/:id", getcompetence);
router.post("/", createcompetences);

router.put("/:id", updatecompones);

router.delete("/:id", deletecompones);

module.exports = router;
