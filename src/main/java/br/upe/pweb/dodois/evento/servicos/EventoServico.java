package br.upe.pweb.dodois.usuario.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.pweb.dodois.usuario.dao.IEventoDao;
import br.upe.pweb.dodois.usuario.servico.interfaces.IEventoServico;

@Service
public class EventoServico implements IEventoServico{
    @Autowired private IEventoDao dao;

	@SuppressWarnings("unchecked")
	@Override
	public IEventoDao getDao() {
		return this.dao;
	}
}
