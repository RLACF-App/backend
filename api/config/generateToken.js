const jwt = require('jsonwebtoken');
const secrets = require('./secrets');

const generateToken = (user) => {
  const options = {
    expiresIn: '1h',
    subject: user.id.toString(),
  };
  return jwt.sign({}, secrets.jwtSecret, options);
};

module.exports = generateToken;
