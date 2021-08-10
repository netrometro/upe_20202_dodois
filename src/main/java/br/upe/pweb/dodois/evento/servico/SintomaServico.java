package br.upe.pweb.dodois.evento.servico;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.pweb.dodois.evento.dao.ISintomaDao;
import br.upe.pweb.dodois.evento.model.Evento;
import br.upe.pweb.dodois.evento.model.Sintoma;
import br.upe.pweb.dodois.evento.servico.interfaces.IEventoServico;
import br.upe.pweb.dodois.evento.servico.interfaces.ISintomaServico;


@Service
public class SintomaServico implements ISintomaServico{
    @Autowired private ISintomaDao dao;
	@Autowired private IEventoServico eventoServico;

	@SuppressWarnings("unchecked")
	@Override
	public ISintomaDao getDao() {
		return this.dao;
	}
}
