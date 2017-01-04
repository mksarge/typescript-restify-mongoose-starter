import * as restify from 'restify';
import * as controller from '../controllers/logout.controller';

export default (api: restify.Server) => {
  api.put('/api/logout', controller.logout);
};
