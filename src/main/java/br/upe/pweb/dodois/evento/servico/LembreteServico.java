package br.upe.pweb.dodois.evento.servico;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.pweb.dodois.evento.dao.ILembreteDao;
import br.upe.pweb.dodois.evento.servico.interfaces.ILembreteServico;

@Service
public class LembreteServico implements ILembreteServico {
	@Autowired private ILembreteDao dao;

	@SuppressWarnings("unchecked")
	@Override
	public ILembreteDao getDao() {
		return this.dao;
	}

    

}
