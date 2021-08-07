const express = require('express');
const path = require('path');
const xss = require('xss-clean');
const compression = require('compression');
const cors = require('cors');
const favicon = require('serve-favicon');
const config = require('./config/config');
const morgan = require('./config/morgan');
const { authLimiter } = require('./middlewares/rateLimiter');
const routes = require('./routes/v1');
const { errorConverter, errorHandler } = require('./middlewares/error');
const cspMiddleware = require('./middlewares/cspHttp');
const ApiError = require('./utils/ApiError');
const crypto = require('crypto');
const httpStatus = require('http-status')
// const helmet = require('helmet');

const app = express();

// serve favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// add public dir to static
app.use(express.static(path.join(__dirname, 'public')));

// setup nonce for headers
app.use((req, res, next) => {
  res.locals.cspNonce = crypto.randomBytes(64).toString('base64');
  next();
});

// set security with helmet & add CSP
// app.use(cspMiddleware.helmetDefaults());
// app.use(cspMiddleware.csp());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

// limit repeated failed requests to auth endpoints
if (config.env === 'production') {
  app.use('/v1/auth', authLimiter);
}

// v1 api routes
app.use('/', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Page Not Found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
