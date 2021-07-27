package br.upe.pweb.dodois.usuario.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import br.upe.pweb.dodois.base.Entidade;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
public class Grupo extends Entidade{
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_grupo") @Id @Getter 
	private Long id;
    @Column(nullable = false)
    private String nome;
    @OneToMany(mappedBy="grupo")
    @Column(nullable = false)
    private List<Pessoa> pessoas;
}
