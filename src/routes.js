import { Router } from 'express';

import SessionController from './controllers/SessionController';
import { inputFormat } from './middlewares';

const routes = new Router();

routes.post('/user', inputFormat, SessionController.store);

routes.get('/', (req, res) => {
  return res.json({
    mooncake: 'hello world',
    matrix: '...',
    ok: 'maybe',
  })
});

export default routes;