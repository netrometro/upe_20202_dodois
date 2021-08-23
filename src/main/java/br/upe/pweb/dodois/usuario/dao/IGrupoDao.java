package br.upe.pweb.dodois.usuario.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.upe.pweb.dodois.usuario.model.Grupo;

@Repository
public interface IGrupoDao extends CrudRepository<Grupo, Long> {}
