const express = require("express");
const router = express.Router();

const { signup, signin } = require("../controller/auth");

router.post("/login", signin);

router.post("/register", signup);

module.exports = router;
