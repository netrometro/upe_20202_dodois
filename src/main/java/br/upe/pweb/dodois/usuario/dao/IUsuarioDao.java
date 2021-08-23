package br.upe.pweb.dodois.usuario.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.upe.pweb.dodois.usuario.model.Usuario;

@Repository
public interface IUsuarioDao extends CrudRepository<Usuario, Long> {}
