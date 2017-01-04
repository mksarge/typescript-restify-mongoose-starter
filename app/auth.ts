import * as restify from 'restify';

const requireAdmin = (req: restify.Request, res: restify.Response, next: restify.Next) => {
  // not yet defined
  return next();
};

export { requireAdmin };
