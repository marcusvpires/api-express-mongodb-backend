import { Router } from 'express';

import SessionController from './controllers/SessionController';
import { inputFormat } from './middlewares';

const routes = new Router();

routes.post('/user/store', inputFormat, SessionController.store);
routes.post('/user/show', inputFormat, SessionController.show);

routes.get('/', (req, res) => {
  return res.json({
    mooncake: 'hello world',
    matrix: '...',
    ok: 'maybe',
  })
});

export default routes;