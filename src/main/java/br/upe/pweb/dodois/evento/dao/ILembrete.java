package br.upe.pweb.dodois.evento.dao;

import org.springframework.data.repository.CrudRepository;

import br.upe.pweb.dodois.evento.model.Lembrete;

public interface ILembrete extends CrudRepository<Lembrete, Long>{
    
}
