import * as restify from 'restify';
import { logger } from '../../utils/logger';

function get(req: restify.Request, res: restify.Response, next: restify.Next) {
  logger.info('get team');
  res.json(200, 'get team');
  return next();
}

function create(req: restify.Request, res: restify.Response, next: restify.Next) {
  logger.info('create team');
  res.json(200, 'create team');
  return next();
}

function update(req: restify.Request, res: restify.Response, next: restify.Next) {
  logger.info('update team');
  res.json(200, 'update team');
  return next();
}

function remove(req: restify.Request, res: restify.Response, next: restify.Next) {
  logger.info('remove team');
  res.json(200, 'remove team');
  return next();
}

export { get, create, update, remove }
