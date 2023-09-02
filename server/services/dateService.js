const db = require("../data/db");
const queries = require("../data/queries");
const { emptyOrRows, getDayFromDate } = require("./util");

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
    } else {
        console.error("Unknown Type");
        return;
    }
    const data = emptyOrRows(rows);
    console.log(`${type} Data: ${JSON.stringify(data)}`);
    return data;
};

// TODO: postDate(type, date, name = null) -> if type === dateType.WFH, calculate day using moment (utils)?
let postDate = async (type, date, name = null) => {
    console.log(`dateService.js: creating ${type} to DB with date: ${date}`);
    let rows;
    if (type === dateType.PH) {
        rows = await db.query(queries.createPH(name, date));
    } else if (type === dateType.LEAVES) {
        rows = await db.query(queries.createLeave(name, date));
    } else if (type === dateType.WFH) {
        const day = getDayFromDate(date);
        rows = await db.query(queries.createWFH(day, date));
    } else {
        console.error("Unknown Type");
        return;
    }
    const data = emptyOrRows(rows);
    return data;
};

module.exports = {
    dateType,
    getDateRange,
    postDate,
};
