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

//CORS Setting
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// Routing
const contactRoute = require('./routes/contact')
app.use('/api/contact', contactRoute)

// Testing API
app.get('/', (req, res) => {
    res.send('Belajar EXPRESS')
})

// Testing PORT
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log('Server running at Port:' + PORT)
})