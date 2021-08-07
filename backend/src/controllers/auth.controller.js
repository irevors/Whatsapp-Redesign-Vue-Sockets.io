const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const passport = require('passport');

const register = catchAsync(async (req, res) => {
// create user, token, return response code
});

const login = catchAsync(async (req, res) => {
// validate user
});

const logout = catchAsync(async (req, res) => {

});

const refreshTokens = catchAsync(async (req, res) => {
// refresh token
});

const resetPassword = catchAsync(async (req, res) => {
// reset password
});



module.exports = {
  register,
  login,
  logout,
  refreshTokens,
  resetPassword,

};
