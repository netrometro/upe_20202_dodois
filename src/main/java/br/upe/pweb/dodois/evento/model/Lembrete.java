package br.upe.pweb.dodois.evento.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import br.upe.pweb.dodois.base.Entidade;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
public class Lembrete extends Entidade{
    
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_lembrete") @Id @Getter 
	private Long id;

   
}
