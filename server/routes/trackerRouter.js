const express = require("express");
const router = express.Router();
const trackerService = require("../services/trackerService");
const dateService = require("../services/dateService");
const { nWeeksWindow } = require("../services/util");

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
            attendance,
            start,
            end,
            ph_no: ph.length,
            leaves_no: leaves.length,
            wfh_no: wfh.length,
        });
    } catch (err) {
        console.log(`Error while calculating attendance: ${err.message}`);
    }
});

router.get("/ph", async (req, res, next) => {
    try {
        let { start, end, today, totalWeekdays } = nWeeksWindow(12);
        const data = await dateService.getDateRange(
            dateService.dateType.PH,
            start,
            end
        );
        res.json(data);
    } catch (err) {
        console.log(`Error while getting PH: ${err.message}`);
    }
});

router.post("/date", async (req, res, next) => {
    try {
        if (req.body.type === undefined) {
            res.status(400).json({ message: "missing type" });
            return;
        }
        if (dateService.dateType[req.body.type] === undefined) {
            res.status(400).json({ message: "unknown type" });
            return;
        }
        if (req.body.date === undefined) {
            res.status(400).json({ message: "missing date" });
            return;
        }

        if (
            req.body.type === dateService.dateType.PH ||
            req.body.type === dateService.dateType.LEAVES
        ) {
            if (req.body.name === undefined) {
                res.status(400).json({
                    message: "missing name for PH or Leaves",
                });
                return;
            }
            await dateService.postDate(
                dateService.dateType[req.body.type],
                req.body.date,
                req.body.name
            );
        } else if (req.body.type === dateService.dateType.WFH) {
            await dateService.postDate(dateService.dateType.WFH, req.body.date);
        }

        // TODO: return json of added
        res.status(200).json({ message: "added" });
    } catch (err) {
        console.log(`Error while creating date: ${err.message}`);
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
