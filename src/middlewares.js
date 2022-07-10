import express from 'express';
import path from 'path';

const middlewares = (server) => {
  server.use(express.json());
  server.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
};

export default middlewares;

const inputTrim = (object) => {
  object.email = object.email.trim();
  object.password = object.password.trim();
  if (object.name) object.name = object.name.trim();
  return object;
};

export const inputFormat = (req, res, next) => {
  try {
    req.body = inputTrim(req.body);
    if (req.body.update) req.body.update = inputTrim(req.body);
    return next();
  } catch (error) {
    return res.json({ ok: false, error: error.message, message: 'Dados inválidos' });
  }
};
