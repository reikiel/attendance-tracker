const db = require("../data/db");
const queries = require("../data/queries");
const { emptyOrRows } = require("./util");

const dateType = {
    PH: "PH",
    LEAVES: "LEAVES",
    WFH: "WFH",
};

let getDateRange = async (type, start, end) => {
    console.log(
        `dateService.js: getting ${type} from DB between ${start} and ${end}`
    );
    let rows;
    if (type === dateType.PH) {
        rows = await db.query(queries.getDateRangePH(start, end));
    } else if (type === dateType.WFH) {
        rows = await db.query(queries.getDateRangeWFH(start, end));
    } else if (type === dateType.LEAVES) {
        rows = await db.query(queries.getDateRangeLeaves(start, end));
    }
    const data = emptyOrRows(rows);
    console.log(`${type} Data: ${JSON.stringify(data)}`);
    return data;
};

// TODO: postDate(type, date, name = null) -> if type === dateType.WFH, calculate day using moment (utils)?

module.exports = {
    dateType,
    getDateRange,
};
