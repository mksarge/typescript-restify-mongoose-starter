import * as restify from 'restify';
import { logger } from '../../utils/logger';

function pong(req: restify.Request, res: restify.Response, next: restify.Next) {
  logger.info('pong');
  res.json(200, 'pong');
  return next();
}

export { pong }
