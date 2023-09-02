const express = require("express");
const router = express.Router();
const trackerService = require("../services/trackerService");
const dateService = require("../services/dateService");
const { nWeeksWindow } = require("../services/util");

router.get("/ph", async (req, res, next) => {
    try {
        let { start, end, today, totalWeekdays } = nWeeksWindow(12);
        const data = await dateService.getDateRangePH(start, end);
        res.json(data);
    } catch (err) {
        console.log(`Error while getting PH: ${err.message}`);
    }
});

router.get("/", async (req, res, next) => {
    try {
        let { start, end, today, totalWeekdays } = nWeeksWindow(12);
        const ph = await dateService.getDateRange(
            dateService.dateType.PH,
            start,
            end
        );
        const leaves = await dateService.getDateRange(
            dateService.dateType.LEAVES,
            start,
            end
        );
        const wfh = await dateService.getDateRange(
            dateService.dateType.WFH,
            start,
            end
        );

        // calculate
        attendance = trackerService.calculatePercentage(
            totalWeekdays,
            ph,
            leaves,
            wfh
        );

        res.json({
            attendance: `${attendance}%`,
        });
    } catch (err) {
        console.log(`Error while calculating attendance: ${err.message}`);
    }
});

module.exports = router;
