const { body, validationResult, sanitizeBody } = require('express-validator');

// const userValidationRules = () => [
//   // username must be an email
//   body('email').isEmail(),
//   // password must be at least 5 chars long
//   body('phone').isLength({ min: 5 }),
// ];

const userSantitation = () => [
  body('email')
    .isEmail()
    .normalizeEmail(),
  body('firstname')
    .not().isEmpty()
    .trim()
    .escape(),
  body('lastname')
    .not().isEmpty()
    .trim()
    .escape(),
  body('phone')
    .not().isEmpty()
    .trim()
    .escape(),
];

const loginSanitation = () => [
  body('username')
    .isEmail()
    .normalizeEmail(),
  body('password')
    .isLength({ min: 5 })
    .escape(),
];
const registerSanitation = () => [
  body('username')
    .isEmail()
    .normalizeEmail(),
  body('password')
    .isLength({ min: 5 })
    .escape(),
  body('confirmPassword')
    .isLength({ min: 5 })
    .escape(),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
  return res.status(422).json({
    errors: extractedErrors,
    message: 'validation failed',
  });
};

module.exports = {
  validate,
  userSantitation,
  loginSanitation,
  registerSanitation,
};
