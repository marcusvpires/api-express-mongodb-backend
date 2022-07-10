
//metodos: index, show, update, store, destroy
/*
  index: listagem de sessoes
  store: Criar uma sessao
  show: Quando queremos listar uma UNICA sessao
  update: quando queremos alterar alguma sessao
  destroy: quando queremos deletar uma sessao
*/ 

import User from '../models/User';

class SessionController{

  async store(req, res){
    const { email } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create(req.body);
      return res.json({ ok: true, user, message: "Usuário criado com sucesso"});
    } else {
      return res.json({ ok: false, message: "Esse usuário já existe" })
    }
  }

}

export default new SessionController();