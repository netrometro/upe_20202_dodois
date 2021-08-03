package br.upe.pweb.dodois.evento.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.upe.pweb.dodois.base.Entidade;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
public class Sintoma extends Entidade{
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_sintoma") @Id @Getter 
	private Long id;
    
    @Column(nullable = false)
	@Enumerated(EnumType.STRING)
    private TipoSintoma tipo;
    
    @Column(nullable = false)
    private String descricao;
    
    @ManyToOne(cascade = CascadeType.ALL)
    @JsonIgnore
    private Evento evento; 
}
