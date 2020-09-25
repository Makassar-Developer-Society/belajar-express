const express = require('express')
const app = express()

app.get('/', (req, res) => {
    req.getConnection((err, con) => {
        con.query('SELECT * FROM tb_contact', (err, rows, fields) => {
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(200).json(rows)
            }
        })
    })
})

app.post('/', (req, res) => {
    req.getConnection((err, con) => {
        let contactData = {
            name: req.body.name,
            email: req.body.email,
            enquiry: req.body.enquiry,
        }
        con.query('INSERT INTO tb_contact SET ?', [contactData], (err, rows, fields) => {
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(200).json(rows)
            }
        })
    })
})


module.exports = app