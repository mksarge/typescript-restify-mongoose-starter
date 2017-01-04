import * as restify from 'restify';
import * as controller from '../controllers/team.controller';
import * as auth from '../auth';

export default (api: restify.Server) => {
  api.get('/api/team', auth.requireAdmin, controller.get);
  api.post('/api/team', auth.requireAdmin, controller.create);
  api.put('/api/team', auth.requireAdmin, controller.update);
  api.del('/api/team', auth.requireAdmin, controller.remove);
};
