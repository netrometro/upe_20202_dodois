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

	public void incluirEmEvento(Sintoma sintoma, Long eventoId){
		Evento evento = eventoServico.getDao().findById(eventoId).get();
		sintoma.setDataInclusao(LocalDateTime.now());
		sintoma.setEvento(evento);
		getDao().save(sintoma);
	}

	public Sintoma alterarDescricao(Long id, String descricao) {
		Sintoma sintoma = getDao().findById(id).get();
		sintoma.setDescricao(descricao);
		sintoma.setDataUltimaAlteracao(LocalDateTime.now());
		getDao().save(sintoma);
		return sintoma;
	}

	public List<Sintoma> pegarSintomasEvento(Long id){
		return getDao().findByEventoId(id);
	}

}
