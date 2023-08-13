const moment = require("moment");
const db = require("../data/db");
const { getPHQuery } = require("../data/queries");

const nWeeksWindow = (n) => {
    const totalWeekdays = 5 * n;
    const today = moment().format("YYYY-MM-DD");
    const end = moment().day(-2).format("YYYY-MM-DD"); // last friday

    // n weeks ago monday
    const start = moment()
        .day(-(7 * n) + 1)
        .format("YYYY-MM-DD");

    return { start, end, today, totalWeekdays };
};

const emptyOrRows = (rows) => {
    if (!rows) {
        return "test";
    }
    return rows;
};

module.exports = {
    nWeeksWindow,
    emptyOrRows,
};
