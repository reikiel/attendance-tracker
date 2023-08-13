const express = require("express");
const router = express.Router();
const trackerService = require("../services/trackerService");

router.get("/", async (req, res, next) => {
    try {
        res.json(await trackerService.getPH());
    } catch (err) {
        console.log(`Error while getting PH: ${err.message}`);
    }
});

module.exports = router;
