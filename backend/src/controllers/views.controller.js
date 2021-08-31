const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const path = require('path')


const home = catchAsync(async (req, res) => {
  res.sendFile(path.join(__dirname, '..','views','index.html'));
});


module.exports = {
  home,
}