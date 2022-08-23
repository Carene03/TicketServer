/* eslint-disable max-len */
/* eslint-disable strict */
'use strict';
function BaseError() {}

BaseError.userDoesNotExist = function() {
  var error = new Error('User does not exist.');
  error.statusCode = 404;
  error.code = 'USER_NOT_EXIST';
  return error;
};

BaseError.wrongPassword = function() {
  var error = new Error('Password does not match');
  error.statusCode = 400;
  error.code = 'WRONG_PASSWORD';
  return error;
};

module.exports = BaseError;
