package br.upe.pweb.dodois.diagnostico.dao;

import org.springframework.data.repository.CrudRepository;

import br.upe.pweb.dodois.diagnostico.model.Diagnostico;

public interface IDiagnosticoDao extends CrudRepository<Diagnostico, Long>{
    
}
