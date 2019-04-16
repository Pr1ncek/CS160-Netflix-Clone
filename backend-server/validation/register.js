const Validator = require('validator');
const isEmpty = require('./utils/is-empty');

const validateRegistrationInputs = data => {
  const errors = {};
  const { firstName = '', lastName = '', email = '', password = '', confirmPassword = '' } = data;

  if (!Validator.isLength(firstName, { min: 2, max: 25 })) {
    errors.firstName = 'First name must be between 2 and 20 characters';
  }
  if (Validator.isEmpty(firstName)) {
    errors.firstName = 'First name is required';
  }

  if (!Validator.isLength(lastName, { min: 2, max: 25 })) {
    errors.lastName = 'First name must be between 2 and 20 characters';
  }
  if (Validator.isEmpty(lastName)) {
    errors.lastName = 'Last name is required';
  }

  if (!Validator.isEmail(email)) {
    errors.email = 'Please enter a valid email';
  }

  if (!Validator.isLength(password, { min: 8, max: 30 })) {
    errors.password = 'Password must be atleast 8 characters';
  }

  if (Validator.isEmpty(confirmPassword)) {
    errors.confirmPassword = 'Please confirm your password';
  }

  if (!Validator.equals(password, confirmPassword)) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return { errors, isValid: isEmpty(errors) };
};

module.exports = validateRegistrationInputs;
