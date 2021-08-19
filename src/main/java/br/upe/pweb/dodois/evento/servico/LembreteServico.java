package br.upe.pweb.dodois.evento.servico;


import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.pweb.dodois.evento.dao.ILembreteDao;
import br.upe.pweb.dodois.evento.model.Lembrete;
import br.upe.pweb.dodois.evento.servico.interfaces.ILembreteServico;

@Service
public class LembreteServico implements ILembreteServico {
	@Autowired private ILembreteDao dao;

	@SuppressWarnings("unchecked")
	@Override
	public ILembreteDao getDao() {
		return this.dao;
	}

	public Lembrete alterarDescricao(Long id, String descricao){
		Lembrete lembrete = getDao().findById(id).get();
		lembrete.setDescricao(descricao);
		lembrete.setDataUltimaAlteracao(LocalDateTime.now());
		getDao().save(lembrete);
		return lembrete;
	}
}
