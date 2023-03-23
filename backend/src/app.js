const express = require('express')
const cors = require('cors')

const conn = require('./app.js')

const router = require('./router')
const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

conn
    try {
        app.listen(5000),   console.log('Conectado.')  
    } catch (error) {
        console.log(error)
    }

module.exports = app