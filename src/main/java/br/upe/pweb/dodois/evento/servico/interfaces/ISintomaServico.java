package br.upe.pweb.dodois.evento.servico.interfaces;


import java.util.List;

import br.upe.pweb.dodois.base.CrudService;
import br.upe.pweb.dodois.evento.model.Sintoma;


public interface ISintomaServico extends CrudService<Sintoma, Long> {
    Sintoma alterarDescricao(Long id, String descricao);
    void incluirEmEvento(Sintoma sintoma, Long eventoId);
    List<Sintoma> pegarSintomasEvento(Long id);
 }