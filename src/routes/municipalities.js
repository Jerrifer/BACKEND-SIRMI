const express = require("express");
const router = express.Router();

const {
  getMunicipalities,
  getMunicipality,
} = require("../controller/municipalitie.controller");

router.get("/", getMunicipalities);
router.get("/:id", getMunicipality);

module.exports = router;
