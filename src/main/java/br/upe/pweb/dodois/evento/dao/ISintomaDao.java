package br.upe.pweb.dodois.evento.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import br.upe.pweb.dodois.evento.model.Sintoma;

public interface ISintomaDao extends CrudRepository<Sintoma, Long>{
    List<Sintoma> findByEventoId(Long id);
}
