package br.upe.pweb.dodois.evento.servico.interfaces;

import java.util.List;

import br.upe.pweb.dodois.base.CrudService;
import br.upe.pweb.dodois.evento.model.Avaliacao;
import br.upe.pweb.dodois.evento.model.Evento;
import br.upe.pweb.dodois.evento.model.Sintoma;

public interface IEventoServico extends CrudService<Evento, Long> {

    public Evento alterarAvaliacao(Long id, Avaliacao avaliacao);
    public List<Sintoma> listarSintomas(Long id);
    public void incluirSintoma(Long eventoId, Sintoma sintoma);
 }