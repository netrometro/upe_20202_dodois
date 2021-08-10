package br.upe.pweb.dodois.administracaomedicacoes.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import br.upe.pweb.dodois.base.Entidade;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
public class AdmMedicacao extends Entidade{
   
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_admMedicacao") 
    @Id 
    @Getter 
	private Long id;

    @Getter @Setter 
	private String nome;

    @Getter @Setter 
	private String posologia;

}
