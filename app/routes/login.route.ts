import * as restify from 'restify';
import * as controller from '../controllers/login.controller';

export default (api: restify.Server) => {
  api.put('/api/login', controller.login);
};
