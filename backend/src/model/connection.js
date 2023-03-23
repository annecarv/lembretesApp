const mysql = require('mysql2/promise')

const connection = mysql.createPool({
    host: '127.0.0.1',
    port: 5500,
    user: 'root',
    password: '',
    database: 'lembretesApp'
})

module.exports = connection