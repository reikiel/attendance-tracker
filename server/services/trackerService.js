//* More for functions that controller will call like gettingPercentage
//* calculations and getting 12 week window put in util
//* dates and stuff put in dateService
const db = require("../data/db");
const { getPHQuery } = require("../data/queries");
const { emptyOrRows } = require("./util");

const getPH = async (_) => {
    console.log("getting PH from DB");
    const rows = await db.query(getPHQuery);
    const data = emptyOrRows(rows);

    return data;
};

module.exports = {
    getPH,
};
