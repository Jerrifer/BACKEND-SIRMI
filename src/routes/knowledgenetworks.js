const express = require("express");
const router = express.Router();
const {
  getKnowledgeNetworks,
  getKnowledgeNetwork,
} = require("../controller/knowledgeNetwork.controller");

router.get("/", getKnowledgeNetworks);

router.get("/:id", getKnowledgeNetwork);

module.exports = router;
