import express from 'express';

const middlewares = (server) => {
  server.use(express.json());
};

export default middlewares;

export const inputFormat = (req, res, next) => {
  try {
    req.body.email = req.body.email.trim();
    req.body.password = req.body.password.trim();
    if (req.body.name) req.body.name = req.body.name.trim();
    return next();
  } catch (error) {
    return res.json({ ok: false, error: error.message, message: "Dados inválidos" });
  }
};
