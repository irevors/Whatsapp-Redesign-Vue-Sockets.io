const config = require('./config');

module.exports = (app) => {
  mongoose
    .connect(config.mongoose.url, config.mongoose.options)
    .then((res) => logger.info('Connected to MongoDB'))
    .catch((err) => logger.err('Error connecting to DB'));

  mongoose.Promise = global.Promise;
  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);
  process.on('SIGHUP', cleanup);
  if (app) {
    app.set('mongoose', mongoose);
  }
};
function cleanup() {
  mongoose.connection.close(function () {
    process.exit(0);
  });
}
