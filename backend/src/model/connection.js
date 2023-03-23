const mysql = require("mysql");

/* const connection = mysql.createPool({
    host: '127.0.0.1',
    port: 5500,
    user: 'root',
    password: '',
    database: 'lembretesApp'
}
) */

const connection = mysql.createConnection({
    host: "localhost",
    port: 3308,
    user: "root",
    password: "",
    database: "lembretesapp",
    insecureAuth: true,
    dialect: "mysql",
    multipleStatements: true,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    })

module.exports = connection;
