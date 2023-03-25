const mysql = require("mysql2");

const connection =  mysql.createPool({
    host: "localhost",
    port: 3308,
    user: "root",
    password: "",
    database: "lembretes_app",
    insecureAuth: true,
    dialect: "mysql",
    multipleStatements: true,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    }).promise()

module.exports = connection
