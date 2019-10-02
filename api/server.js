const express = require('express')

const server = express()

server.get('/', (req, res) => res.send("Server Connected. Welcome to the RLACF Volunteering App"))

module.exports = server