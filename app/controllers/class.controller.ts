import * as restify from 'restify';
import { logger } from '../../utils/logger';

function update(req: restify.Request, res: restify.Response, next: restify.Next) {
  logger.info('update class');
  res.json(200, 'update class');
  return next();
}

export { update }
