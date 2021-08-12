package br.upe.pweb.dodois.administracaomedicacoes.dao;

import org.springframework.data.repository.CrudRepository;

import br.upe.pweb.dodois.administracaomedicacoes.model.AdmMedicacao;

public interface IAdmMedicacaoDao extends CrudRepository<AdmMedicacao, Long>{
    
}
