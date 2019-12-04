const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
// const restricted = require('./middleware/restricted');

const volunteerRegister = require('./auth/volunteerRegister');
const opportunities = require('./opportunities/opportunities-router');
const volunteers = require('./users/volunteers/volunteer-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth/volunteer', volunteerRegister);

server.use('/api/opportunities', opportunities);
server.use('/api/volunteers', volunteers);


server.get('/', (req, res) => res.send('Server Connected. Welcome to the RLACF Volunteering App'));

module.exports = server;
