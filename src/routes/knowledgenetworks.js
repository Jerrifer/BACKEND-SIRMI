const express = require("express");
const router = express.Router();
const {
  getknowledgeNetwork,
  getknowledgeNetworks,
} = require("../controller/knowledgeNetwork.controller");

router.get("/", getknowledgeNetwork);

router.get("/:id", getknowledgeNetworks);

module.exports = router;
