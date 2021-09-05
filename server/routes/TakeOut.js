
const express = require('express')

const db = require('../db/dbFuncs')

const router = express.Router()


router.get('/', (req, res) => {
    db.getAllItems()
    .then(item => {
        res.json(item)
    })
})
router.get('/basket', (req, res) => {
    db.getAllItemsBasket()
    .then(item => {
        res.json(item)
    })
})
router.get('/locations', (req, res) => {
    db.getAllLocations()
    .then(item => {
        res.json(item)
    })
})

router.delete('/:id', (req, res) => {
    db.deleteMenuItem(req.params.id)
    .then(item => {
        res.json(item)
    })
})
router.delete('/basket/:id', (req, res) => {
    db.deleteBasketItem(req.params.id)
    .then(item => {
        res.json(item)
    })
})
router.delete('/locations/:id', (req, res) => {
    db.deleteLocation(req.params.id)
    .then(item => {
        res.json(item)
    })
})
//write your get post patch del and other routes here 

module.exports = router