package br.upe.pweb.dodois.diagnostico.servico;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.pweb.dodois.diagnostico.dao.IDiagnosticoDao;
import br.upe.pweb.dodois.diagnostico.model.Diagnostico;
import br.upe.pweb.dodois.diagnostico.model.Receita;
import br.upe.pweb.dodois.diagnostico.servico.Interface.IDiagnosticoServico;

@Service
public class DiagnosticoServico implements IDiagnosticoServico{
	
	@Autowired private IDiagnosticoDao dao;

	@SuppressWarnings("unchecked")
	@Override
	public IDiagnosticoDao getDao() {
		return this.dao;
	}

    public Diagnostico alterarDescricao(Long id, String descricao) {
        Diagnostico diagnostico = getDao().findById(id).get();
		diagnostico.setDescricao(descricao);
		diagnostico.setDataUltimaAlteracao(LocalDateTime.now());
		getDao().save(diagnostico);
		return diagnostico;
    }
    
    public List<Receita> listarReceitas(Long id) {
        Diagnostico diagnostico = getDao().findById(id).get();
		return diagnostico.getReceitas();
    }

    public void incluirReceita(Long diagnosticoId, Receita receita) {
        Diagnostico diagnostico = getDao().findById(diagnosticoId).get();
		List<Receita> receitas = diagnostico.getReceitas();
		receitas.add(receita);
		diagnostico.setReceitas(receitas);
		getDao().save(diagnostico); 
    }  
}
