package br.upe.pweb.dodois.diagnostico.model;

import br.upe.pweb.dodois.base.Entidade;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
public class Diagnostico extends Entidade{
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_diagnostico") 
    @Id 
    @Getter 
	private Long id;

    @Column(nullable = false)
    private String descricao;

    @OneToMany(mappedBy="diagnostico", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Receita> receitas;
}
