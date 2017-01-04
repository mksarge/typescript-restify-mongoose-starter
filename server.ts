import mongoose = require('mongoose');
import { config } from './config/env';
import { app } from './config/restify';
import { logger } from './utils/logger';

// use native ES6 promises instead of mongoose promise library
mongoose.Promise = global.Promise;

// connect to mongodb
const options = { server: { socketOptions: { keepAlive: 1 } } };
const db: mongoose.Connection = mongoose.connect(config.db, options).connection;

// print mongoose logs in dev and test env
if (config.debug) {
  mongoose.set('debug', true);
}

// throw error on db error
db.on('error', (err: any) => {
  throw new Error(`Unable to connect to database: ${err}`);
});

// start the server as soon as db connection is made
db.once('open', () => {
  logger.info(`Connected to database: ${config.db}`);
  app.listen(config.port, () => {
    logger.info(`${config.name} is running at ${app.url}`);
  });
});

export { app };
