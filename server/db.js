const mysql = require("mysql2/promise");

const pool =  mysql.createPool({
    user: "admin",
    password: "wsleung329",
    port: 3306,
    database: "proj1",
    host: "projdb1.cuklflnkaq3u.us-east-1.rds.amazonaws.com"
});

module.exports = pool;
