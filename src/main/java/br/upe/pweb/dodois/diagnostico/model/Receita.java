package br.upe.pweb.dodois.diagnostico.model;

import br.upe.pweb.dodois.base.Entidade;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
public class Receita extends Entidade{
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_receita") 
    @Id 
    @Getter 
	private Long id;

    @Column(nullable = false)
    private String descricao;

    @ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_diagnostico")
    private Diagnostico diagnostico;
}
