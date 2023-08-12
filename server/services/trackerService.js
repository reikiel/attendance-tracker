const db = require("../data/db");
const { getPHQuery } = require("../data/queries");

async function getPH() {
  console.log("getting PH from DB");
  const rows = await db.query(getPHQuery);
  const data = emptyOrRows(rows);

  return data;
}

function emptyOrRows(rows) {
  if (!rows) {
    return "test";
  }
  return rows;
}

module.exports = {
  getPH,
};
