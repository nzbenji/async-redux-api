const path = require('path')
const express = require('express')

const apiRoutes = require('./api')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/api', apiRoutes)

module.exports = server
