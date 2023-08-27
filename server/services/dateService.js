const db = require("../data/db");
const queries = require("../data/queries");
const { emptyOrRows } = require("./util");

// TODO: can combine below 3 into one function
let getDateRangePH = async (start, end) => {
    console.log(`getting PH from DB between ${start} and ${end}`);
    const rows = await db.query(queries.getDateRangePH(start, end));
    const data = emptyOrRows(rows);
    console.log(`PH Data: ${JSON.stringify(data)}`);

    return data;
};

let getDateRangeWFH = async (start, end) => {
    console.log(`getting WFH from DB between ${start} and ${end}`);
    const rows = await db.query(queries.getDateRangeWFH(start, end));
    const data = emptyOrRows(rows);
    console.log(`WFH Data: ${JSON.stringify(data)}`);

    return data;
};

let getDateRangeLeaves = async (start, end) => {
    console.log(`getting leaves from DB between ${start} and ${end}`);
    const rows = await db.query(queries.getDateRangeLeaves(start, end));
    const data = emptyOrRows(rows);
    console.log(`Leaves Data: ${JSON.stringify(data)}`);

    return data;
};

module.exports = {
    getDateRangePH,
    getDateRangeWFH,
    getDateRangeLeaves,
};
