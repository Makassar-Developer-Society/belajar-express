const express = require('express')
const app = express()

// Testing API
app.get('/', (req, res) => {
    res.send('Belajar EXPRESS')
})

// Testing PORT
const PORT = 3003;
app.listen(PORT, () => {
    console.log('Server running at Port:' + PORT)
})