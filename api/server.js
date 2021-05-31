const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const passport = require('passport');
const jwtAuthenticate = require('./middleware/jwt-authenticate');
const checkRecaptcha = require('./middleware/recpatcha');

const volunteerRegister = require('./auth/volunteerRegister');
const opportunities = require('./opportunities/opportunities-router');
const favorites = require('./favorites/favorites-router');
const checkUser = require('./auth/checkuser');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use(passport.initialize());

server.use('/api/auth/volunteer', checkRecaptcha, volunteerRegister);
// server.use('/api/secure/checkuser', jwtAuthenticate, checkUser);
// server.use('/api/secure/favorites', jwtAuthenticate, favorites);

server.use('/api/opportunities', opportunities);


server.get('/', (req, res) => res.send('Server Connected. Welcome to the RLACF Volunteering App'));

module.exports = server;
