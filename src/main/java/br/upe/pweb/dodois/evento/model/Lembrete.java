package br.upe.pweb.dodois.evento.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

import br.upe.pweb.dodois.base.Entidade;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
public class Lembrete extends Entidade{ 
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_lembrete") @Id @Getter 
	private Long id;
	
	@Column(nullable = false) @Getter @Setter
	private Date data;
	
	@Column(nullable = false) @Getter @Setter 
	private String descricao;
	
	@ManyToOne(cascade = CascadeType.ALL)
    @JsonBackReference
    private Evento evento; 
}
