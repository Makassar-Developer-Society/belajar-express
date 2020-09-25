const express = require('express')
const app = express()

// Body-Parser: Convert RawData to JSON
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

// Testing API
app.get('/', (req, res) => {
    res.send('Belajar EXPRESS')
})

// Testing PORT
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log('Server running at Port:' + PORT)
})