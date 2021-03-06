
const express = require('express')
const path = require('path')

//change routes file to suite new topic then also change this
const Route = require('./routes/TakeOut')
const Route2 = require('./routes/bookTable')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

//change the name below to relate to new website
server.use('/api/v1/Home', Route, Route2)

module.exports = server