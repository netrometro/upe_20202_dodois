package br.upe.pweb.dodois.evento.dao;

import org.springframework.data.repository.CrudRepository;

import br.upe.pweb.dodois.evento.model.Sintoma;

public interface ISintomaDao extends CrudRepository<Sintoma, Long>{
    
}
