package br.upe.pweb.dodois.diagnostico.servico.Interface;

import br.upe.pweb.dodois.base.CrudService;

import br.upe.pweb.dodois.diagnostico.model.Receita;

public interface IReceitaServico extends CrudService<Receita, Long>{

    public Receita alterarDescricao(Long id, String descricao);
}
