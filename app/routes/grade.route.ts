import * as restify from 'restify';
import * as controller from '../controllers/grade.controller';
import * as auth from '../auth';

export default (api: restify.Server) => {
  api.get('/api/grade', auth.requireAdmin, controller.get);
  api.put('/api/grade', auth.requireAdmin, controller.update);
};
