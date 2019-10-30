const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const restricted = require('./middleware/restricted');

const volunteerRegister = require('./auth/volunteerRegister');
const opportunities = require('./resources/Opportunities/index');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth/volunteer', volunteerRegister);

server.use('/opportunities', restricted, opportunities);

server.get('/', (req, res) => res.send('Server Connected. Welcome to the RLACF Volunteering App'));

module.exports = server;
