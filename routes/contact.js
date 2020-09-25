const express = require('express')
const app = express()

app.get('/', (req, res) => {
    req.getConnection((err, con) => {
        con.query('SELECT * FROM tb_contact', (err, rows) => {
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(200).json(rows)
            }
        })
    })
})


module.exports = app