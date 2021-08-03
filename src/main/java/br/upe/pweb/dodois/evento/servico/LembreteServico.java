package br.upe.pweb.dodois.evento.servico;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.pweb.dodois.evento.servico.interfaces.ILembreteServico;
import br.upe.pweb.dodois.usuario.dao.ICredenciadoDao;

@Service
public class LembreteServico implements ILembreteServico {
	@Autowired private ICredenciadoDao dao;

	@SuppressWarnings("unchecked")
	@Override
	public ICredenciadoDao getDao() {
		return this.dao;
	}

    

}
