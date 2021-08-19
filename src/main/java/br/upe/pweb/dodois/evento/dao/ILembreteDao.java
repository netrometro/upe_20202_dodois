package br.upe.pweb.dodois.evento.dao;

import org.springframework.data.repository.CrudRepository;

import br.upe.pweb.dodois.evento.model.Lembrete;

public interface ILembreteDao extends CrudRepository<Lembrete, Long>{
    
}
