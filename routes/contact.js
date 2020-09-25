const express = require('express')
const app = express()

// Get All Data
app.get('/contact', (req, res) => {
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

// Get Data By ID
app.get('/contact/(:id)', (req, res) => {
    req.getConnection((err, con) => {
        con.query('SELECT * FROM tb_contact WHERE id = ?', [req.params.id], (err, rows, fields) => {
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(200).json(rows)
            }
        })
    })
})

// POST Data
app.post('/contact', (req, res) => {
    req.getConnection((err, con) => {
        let contactData = {
            name: req.body.name,
            email: req.body.email,
            enquiry: req.body.enquiry,
        }
        // Validation
        if (contactData.enquiry === "Bagus") {
            res.status(400).json({
                message: 'Duplicate Data'
            })
        } else {
            con.query('INSERT INTO tb_contact SET ?', [contactData], (err, rows, fields) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).json(rows)
                }
            })
        }
    })
})

// PUT Data
app.put('/contact/(:id)', (req, res) => {
    req.getConnection((err, con) => {
        let contactData = {
            id: req.params.id,
            name: req.body.name,
            email: req.body.email,
            enquiry: req.body.enquiry,
        }
        con.query('UPDATE tb_contact SET ? WHERE id = ?', [contactData, req.params.id], (err, rows, fields) => {
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(200).json(rows)
            }
        })
    })
})

// DELETE Data
app.delete('/contact/(:id)', (req, res) => {
    req.getConnection((err, con) => {
        con.query('DELETE FROM tb_contact WHERE id = ?', [req.params.id], (err, rows, fields) => {
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(200).json(rows, {
                    message: 'Data Removed'
                })
            }
        })
    })
})

module.exports = app