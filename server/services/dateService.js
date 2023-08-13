const db = require("../data/db");
const { getPHQuery, getPHWithinDateRangeQuery } = require("../data/queries");
const { nWeeksWindow } = require("./util");

let getPHWithinDateRange = async (_) => {
    let { start, end, today, totalWeekdays } = nWeeksWindow(12); // TODO: change to variable next time and pass in through API

    console.log(`getting PH from DB between ${start} and ${end}`);
    const rows = await db.query(getPHWithinDateRangeQuery);
    const data = emptyOrRows(rows);

    return data; // How is the data being returned
};
