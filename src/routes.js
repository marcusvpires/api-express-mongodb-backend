import { Router } from 'express';
import multer from 'multer';

import UserController from './controllers/UserController';
import { inputFormat } from './middlewares';
import uploadConfig from './config/upload';

const upload = multer(uploadConfig);
const routes = new Router();

routes.post('/user', upload.single('photo'), inputFormat, UserController.store);
routes.get('/user', UserController.show);
routes.put('/user/:id', inputFormat, UserController.update);
routes.get('/user/index', UserController.index);
routes.delete('/user', UserController.destroy);

routes.get('/', (req, res) => {
  return res.json({
    mooncake: 'hello world',
    matrix: '...',
    ok: 'maybe',
  })
});

export default routes;