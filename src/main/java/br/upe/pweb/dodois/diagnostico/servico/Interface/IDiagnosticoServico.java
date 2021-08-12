package br.upe.pweb.dodois.diagnostico.servico.Interface;

import java.util.List;

import br.upe.pweb.dodois.base.CrudService;
import br.upe.pweb.dodois.diagnostico.model.Diagnostico;
import br.upe.pweb.dodois.diagnostico.model.Receita;

public interface IDiagnosticoServico extends CrudService<Diagnostico, Long>{

    public Diagnostico alterarDescricao(Long id, String descricao);
    public List<Receita> listarReceitas(Long id);
    public void incluirReceita(Long diagnosticoId, Receita receita);
}
