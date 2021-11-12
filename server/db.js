const mysql = require("mysql2/promise");

const pool =  mysql.createPool({
    user: "root",
    password: "QQLyew67",
    port: 3306,
    database: "EE4221",
    host: "localhost"
});

module.exports = pool;
