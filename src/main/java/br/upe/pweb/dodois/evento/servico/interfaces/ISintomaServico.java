package br.upe.pweb.dodois.evento.servico.interfaces;


import br.upe.pweb.dodois.base.CrudService;
import br.upe.pweb.dodois.evento.model.Sintoma;


public interface ISintomaServico extends CrudService<Sintoma, Long> {
    public Sintoma alterarDescricao(Long id, String descricao);
 }