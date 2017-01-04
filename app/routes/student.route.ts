import * as restify from 'restify';
import * as controller from '../controllers/student.controller';

export default (api: restify.Server) => {
  /** GET /api/users - Get list of users */
  // api.get(userCtrl.list)

  /** POST /api/users - Create new user */
  api.post('/api/student', controller.create);
  // .post(validate(paramValidation.createUser), userCtrl.create);

  /** GET /api/users/:userId - Get user */
  api.get('/api/student/:username', controller.load, controller.get);
  // .get(userCtrl.get)

  /** PUT /api/users/:userId - Update user */
  api.put('/api/student/:username', controller.load, controller.update);
  // .put(validate(paramValidation.updateUser), userCtrl.update)

  /** DELETE /api/users/:userId - Delete user */
  api.del('/api/student/:username', controller.load, controller.remove);
  // .delete(userCtrl.remove);
};
