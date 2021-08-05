package br.upe.pweb.dodois.evento.servico;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.pweb.dodois.evento.dao.ISintomaDao;
import br.upe.pweb.dodois.evento.model.Sintoma;
import br.upe.pweb.dodois.evento.servico.interfaces.ISintomaServico;


@Service
public class SintomaServico implements ISintomaServico{
    @Autowired private ISintomaDao dao;

	@SuppressWarnings("unchecked")
	@Override
	public ISintomaDao getDao() {
		return this.dao;
	}

	public Sintoma alterarDescricao(Long id, String descricao) {
		Sintoma sintoma = getDao().findById(id).get();
		sintoma.setDescricao(descricao);
		sintoma.setDataUltimaAlteracao(LocalDateTime.now());
		getDao().save(sintoma);
		return sintoma;
	}

}
