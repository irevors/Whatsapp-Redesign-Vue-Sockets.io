const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const path = require('path')


const home = catchAsync(async (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../../frontend/dist/index.html'));
});


module.exports = {
  home,
}
