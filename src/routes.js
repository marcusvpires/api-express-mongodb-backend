import { Router } from 'express';

import SessionController from './controllers/SessionController';
import { inputFormat } from './middlewares';

const routes = new Router();

routes.post('/user', inputFormat, SessionController.store);
routes.get('/user', inputFormat, SessionController.show);
routes.put('/user/:id', inputFormat, SessionController.update);
routes.get('/user/index', SessionController.index);
routes.delete('/user', SessionController.destroy);

routes.get('/', (req, res) => {
  return res.json({
    mooncake: 'hello world',
    matrix: '...',
    ok: 'maybe',
  })
});

export default routes;