//metodos: index, show, update, store, destroy
/*
  index: listagem de sessoes
  store: Criar uma sessao
  show: Quando queremos listar uma UNICA sessao
  update: quando queremos alterar alguma sessao
  destroy: quando queremos deletar uma sessao
*/

import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { email } = req.body;
    const { filename } = req.file;
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create(user);
      user.photo = filename;
      return res.json({ ok: true, user, file: req.file, message: 'Usuário criado com sucesso' });
    } else {
      // return res.json({ ok: false, message: 'Esse usuário já existe' });
      const response = await User.updateOne({ _id: user._id }, user);
      user.photo = filename;
      return res.json({ ok: true, user, file: req.file, response, message: 'Usuário atualizado' });
    }
  }

  async show(req, res) {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (user.email === email && user.password === password) {
      return res.json({ ok: true, user });
    } else {
      return res.json({ ok: false, message: 'Usuário ou senha incorretos' });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const user = req.body;
    const response = await User.updateOne({ _id: id }, user);
    return res.json({ ok: true, response, user, message: 'Usuário atualizado com sucesso' });
  }

  async index(req, res) {
    const response = await User.find({});
    return res.json({ ok: true, response });
  }

  async destroy(req, res) {
    const { id } = req.body;
    if (!id) {
      return res.json({ ok: false, message: 'O ID é indefinido' });
    }
    const response = await User.findByIdAndDelete({ _id: id });
    return res.json({ ok: true, response, message: 'Usuário deletado com sucesso' });
  }
}

export default new SessionController();
