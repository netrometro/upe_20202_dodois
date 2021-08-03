package br.upe.pweb.dodois.evento.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.pweb.dodois.evento.dao.IEventoDao;
import br.upe.pweb.dodois.evento.model.Avaliacao;
import br.upe.pweb.dodois.evento.model.Evento;
import br.upe.pweb.dodois.evento.servico.interfaces.IEventoServico;

import java.time.LocalDateTime;

@Service
public class EventoServico implements IEventoServico{
    @Autowired private IEventoDao dao;

	@SuppressWarnings("unchecked")
	@Override
	public IEventoDao getDao() {
		return this.dao;
	}

	public Evento alterarAvaliacao(Long id, Avaliacao avaliacao){
		Evento evento = getDao().findById(id).get();
		evento.setAvaliacao(avaliacao);
		evento.setDataUltimaAlteracao(LocalDateTime.now());
		getDao().save(evento);
		return evento;
	}
}
