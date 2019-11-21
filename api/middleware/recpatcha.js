const Axios = require('axios');

module.exports = (req, res, next) => {
  const params = {
    response: req.body.recaptcha,
    secret: process.env.RECAPTCHA_SECRET_KEY,
  };
  Axios.post(`https://www.google.com/recaptcha/api/siteverify?response=${params.response}&secret=${params.secret}`)
    .then((response) => {
      if (response.data.success === true) {
        next();
      } else {
        res.status(422).json({ message: 'Recaptcha Failed' });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
