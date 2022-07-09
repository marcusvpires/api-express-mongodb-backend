import { Router } from 'express';

import SessionController from './controllers/SessionController';


const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.get('/', (req, res) => {
  return res.json({
    mooncake: 'hello world',
    matrix: '...',
    ok: 'maybe',
  })
});

export default routes;