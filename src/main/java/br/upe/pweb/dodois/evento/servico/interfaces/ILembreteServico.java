package br.upe.pweb.dodois.evento.servico.interfaces;


import br.upe.pweb.dodois.base.CrudService;
import br.upe.pweb.dodois.evento.model.Lembrete;


public interface ILembreteServico extends CrudService<Lembrete, Long> { 

    public Lembrete alterarDescricao(Long id, String descricao);
}