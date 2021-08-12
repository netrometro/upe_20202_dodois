package br.upe.pweb.dodois.diagnostico.dao;

import org.springframework.data.repository.CrudRepository;

import br.upe.pweb.dodois.diagnostico.model.Receita;

public interface IReceitaDao extends CrudRepository<Receita, Long>{
    
}