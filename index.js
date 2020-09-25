const express = require('express')
const app = express()

// Testing API
app.post('/', (req, res) => {
    res.send('Belajar EXPRESS')
})

// Testing PORT
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log('Server running at Port:' + PORT)
})