package br.upe.pweb.dodois.evento.servico;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.pweb.dodois.evento.dao.ILembrete;
import br.upe.pweb.dodois.evento.servico.interfaces.ILembreteServico;

@Service
public class LembreteServico implements ILembreteServico {
	@Autowired private ILembrete dao;

	@SuppressWarnings("unchecked")
	@Override
	public ILembrete getDao() {
		return this.dao;
	}

    

}
