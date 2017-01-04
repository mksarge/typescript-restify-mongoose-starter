import * as restify from 'restify';
import { logger } from '../../utils/logger';

function get(req: restify.Request, res: restify.Response, next: restify.Next) {
  logger.info('get grades');
  res.json(200, 'get grades');
  return next();
}

function update(req: restify.Request, res: restify.Response, next: restify.Next) {
  logger.info('update grades');
  res.json(200, 'update grades');
  return next();
}

export { get, update }
