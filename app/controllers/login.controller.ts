import * as restify from 'restify';
import { logger } from '../../utils/logger';

function login(req: restify.Request, res: restify.Response, next: restify.Next) {
  logger.info('login');
  res.json(200, 'login');
  return next();
}

export { login }
