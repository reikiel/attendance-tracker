const mysql = require("mysql2/promise");
const config = require("../config");

let query = async (sql, params) => {
    const connection = await mysql.createConnection(config.db);
    console.log(`Connection to DB created`);
    const [results] = await connection.execute(sql, params);
    return results;
};

module.exports = {
    query,
};
