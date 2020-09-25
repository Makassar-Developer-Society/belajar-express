const express = require('express')
const app = express()

// Body-Parser: Convert RawData to JSON
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

// Database Init
const mysql = require('mysql')
const myConnection = require('express-myconnection')
const dbConfig = require('./db-config')
const config = {
    host: dbConfig.database.host,
    user: dbConfig.database.user,
    password: dbConfig.database.password,
    port: dbConfig.database.port,
    database: dbConfig.database.database
}
app.use(myConnection(mysql, config, 'pool'))

// Testing API
app.get('/', (req, res) => {
    res.send('Belajar EXPRESS')
})

// Testing PORT
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log('Server running at Port:' + PORT)
})