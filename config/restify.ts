import * as fs from 'fs';
import * as restify from 'restify';
import * as path from 'path';
import { config } from './env';
import { logger } from '../utils/logger';

// get path to route handlers
const pathToRoutes: string = path.join(config.root, '/app/routes');

// create Restify server with the configured name
const app: restify.Server = restify.createServer({ name: config.name });

// parse the body of the request into req.params
app.use(restify.bodyParser());

// user-defined middleware
app.use((req: any, res: any, next: any) => {
  // Set permissive CORS header - this allows this server to be used only as
  // an API server in conjunction with something like webpack-dev-server.
  res.setHeader('Access-Control-Allow-Origin', '*');

  // disable caching so we'll always get the latest data
  res.setHeader('Cache-Control', 'no-cache');

  // log the request method and url
  logger.info(`${req.method} ${req.url}`);

  // log the request body
  logger.info(`Params: ${JSON.stringify(req.params)}`);

  return next();
});

// add route handlers
fs.readdir(pathToRoutes, (err: any, files: string[]) => {
  if (err) {
    throw new Error(err);
  } else {
    files
      .filter((file: string) => path.extname(file) === '.js')
      .forEach((file: string) => {
        const route = require(path.join(pathToRoutes, file));
        route.default(app);
      });
  }
});

export { app };
