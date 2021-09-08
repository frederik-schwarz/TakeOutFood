const express = require('express')

const db = require('../db/dbFuncsBookTable')

const router = express.Router()


router.get('/bookings', (req, res) => {
    db.getAllbookings()
    .then(item => {
        res.json(item)
    })
})
router.delete('/bookings/:id', (req, res) => {
    db.deleteTables(req.params.id)
    .then(item => {
        res.json(item)
    })
})
router.patch('/bookings/:id', (req,res) => {
    db.updateBooking(req.params.id, req.body)
    .then(item => {
        res.json(item)
    })
})
router.post('/bookings', (req,res) => {
    console.log(req.body)
    db.addTable(req.body)
    .then(item => {
        
        res.json(item)
    })
})

module.exports = router