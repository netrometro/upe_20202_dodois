package br.upe.pweb.dodois.usuarios.servicos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.pweb.dodois.usuarios.dao.IUsuarioDao;

@Service
public class UsuarioServico implements IUsuarioServico {

	@Autowired
	private IUsuarioDao dao;

	@SuppressWarnings("unchecked")
	@Override
	public IUsuarioDao getDao() {
		return this.dao;
	}

}
