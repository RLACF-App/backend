const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.get('/', (req, res) => res.send("Server Connected. Welcome to the RLACF Volunteering App"))

module.exports = server
