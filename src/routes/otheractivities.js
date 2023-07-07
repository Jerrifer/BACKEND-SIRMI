const express = require("express");
const router = express.Router();

const {
    getOtherActivities, 
    getOtherActivity,
    createOtherActivity,
    updateOtherActivity,
    deleteOtherActivity,
    otherActivitiesByRmi
} = require("../controller/otherActivity.controller");

router.get("/", getOtherActivities);
router.get("/:id",getOtherActivity );
router.post("/",createOtherActivity );
router.put("/:id",updateOtherActivity );
router.delete("/:id",deleteOtherActivity );
router.delete("/byrmi/:id",otherActivitiesByRmi );

module.exports = router;
