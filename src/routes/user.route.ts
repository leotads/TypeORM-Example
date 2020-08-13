import { Router } from 'express';
import UserController from '../app/controllers/user.controller';

const routes = Router();

routes.route('/users')
  .get(UserController.index)

  export default routes;