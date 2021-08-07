const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');


const createUser = catchAsync(async (req, res) => {
  //create user and return response
});

const getUsers = catchAsync(async (req, res) => {
  // return all/filtered users
});

const getUser = catchAsync(async (req, res) => {
// return requested user
});

const updateUser = catchAsync(async (req, res) => {
// update requested user
});

const deleteUser = catchAsync(async (req, res) => {
// delete requested user
});

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
