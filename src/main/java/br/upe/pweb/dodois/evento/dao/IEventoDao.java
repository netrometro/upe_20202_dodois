package br.upe.pweb.dodois.evento.dao;


import org.springframework.data.repository.CrudRepository;

import br.upe.pweb.dodois.evento.model.Evento;

public interface IEventoDao extends CrudRepository<Evento, Long>{
    
}
