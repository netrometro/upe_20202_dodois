package br.upe.pweb.dodois.diagnostico.servico;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;

import br.upe.pweb.dodois.diagnostico.dao.IReceitaDao;
import br.upe.pweb.dodois.diagnostico.model.Receita;
import br.upe.pweb.dodois.diagnostico.servico.Interface.IReceitaServico;

public class ReceitaServico implements IReceitaServico{

    @Autowired private IReceitaDao dao;

	@SuppressWarnings("unchecked")
	@Override
	public IReceitaDao getDao() {
		return this.dao;

}
    public Receita alterarDescricao(Long id, String descricao) {
        Receita receita = getDao().findById(id).get();
		receita.setDescricao(descricao);
		receita.setDataUltimaAlteracao(LocalDateTime.now());
		getDao().save(receita);
		return receita;
    }
}
