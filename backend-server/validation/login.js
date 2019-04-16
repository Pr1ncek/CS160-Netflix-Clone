const Validator = require('validator');
const isEmpty = require('./utils/is-empty');

const validateLoginInputs = data => {
  const errors = {};
  const { email = '', password = '' } = data;

  if (!Validator.isEmail(email)) {
    errors.email = 'Please enter a valid email';
  }
  if (Validator.isEmpty(password)) {
    errors.password = 'Password is required';
  }

  return { errors, isValid: isEmpty(errors) };
};

module.exports = validateLoginInputs;
