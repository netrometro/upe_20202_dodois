package br.upe.pweb.dodois.evento.servico.interfaces;

import br.upe.pweb.dodois.base.CrudService;
import br.upe.pweb.dodois.evento.model.Avaliacao;
import br.upe.pweb.dodois.evento.model.Evento;

public interface IEventoServico extends CrudService<Evento, Long> {
    public Evento alterarAvaliacao(Long id, Avaliacao avaliacao);
 }