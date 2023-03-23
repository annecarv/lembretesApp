const express = require('express')
const cors = require('cors')

const router = require('./router')
const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

try {
    app.listen(5000),  console.log('Conectado.')  
} catch (error) {
    console.log(error)
}



module.exports = app