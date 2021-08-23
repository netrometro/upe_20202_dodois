package br.upe.pweb.dodois.usuario.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.upe.pweb.dodois.usuario.model.Credenciado;

@Repository
public interface ICredenciadoDao extends CrudRepository<Credenciado, Long> {
    boolean existsByEmail(String email);
}
