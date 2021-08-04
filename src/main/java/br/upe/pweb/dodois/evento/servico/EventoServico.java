package br.upe.pweb.dodois.evento.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.pweb.dodois.evento.dao.IEventoDao;
import br.upe.pweb.dodois.evento.model.Avaliacao;
import br.upe.pweb.dodois.evento.model.Evento;
import br.upe.pweb.dodois.evento.model.Sintoma;
import br.upe.pweb.dodois.evento.servico.interfaces.IEventoServico;

import java.time.LocalDateTime;
import java.util.List;

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

	public List<Sintoma> listarSintomas(Long id){
		Evento evento = getDao().findById(id).get();
		return evento.getSintomas();
	}

	public void incluirSintoma(Long eventoId, Sintoma sintoma){
		Evento evento = getDao().findById(eventoId).get();
		List<Sintoma> sintomas = evento.getSintomas();
		sintomas.add(sintoma);
		evento.setSintomas(sintomas);
		getDao().save(evento);
	}
}
