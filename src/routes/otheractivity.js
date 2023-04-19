const express = require("express");
const router = express.Router();

const {
    getotherActivitys, 
    getotherActivity,
    createotherActivity,
    updateotherActivity,
    deleteotherActivity
} = require("../controller/otherActivity.controller");

router.get("/", getotherActivitys);
router.get("/:id",getotherActivity );
router.post("/",createotherActivity );
router.put("/:id",updateotherActivity );
router.delete("/:id",deleteotherActivity );

module.exports = router;
