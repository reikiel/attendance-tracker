const mysql = require("mysql2/promise");
const config = require("../config");

// TODO: Persistent connection
let query = async (sql, params) => {
    const connection = await mysql.createConnection(config.db);
    console.log(`Connection to DB created`);
    const [results] = await connection.execute(sql, params);

    await connection.end((error) => {
        if (error) {
            console.error("Error closing MySQL connection:", error);
        }
    });
    console.log("Connection to DB closed.");

    return results;
};

module.exports = {
    query,
};
