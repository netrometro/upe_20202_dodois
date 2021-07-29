package br.upe.pweb.dodois.usuario.servicos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.pweb.dodois.usuario.dao.ICredenciadoDao;
import br.upe.pweb.dodois.usuario.dao.IUsuarioDao;

@Service
public class CredenciadoServico implements ICredenciadoServico {
	@Autowired private ICredenciadoDao dao;

	@SuppressWarnings("unchecked")
	@Override
	public ICredenciadoDao getDao() {
		return this.dao;
	}

}
