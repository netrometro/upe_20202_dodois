package br.upe.pweb.dodois.usuario.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.CascadeType;
import javax.persistence.Column;

import br.upe.pweb.dodois.base.Entidade;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
public class Credenciado extends Entidade {
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_credenciado") @Id @Getter 
	private Long id;
	@Column(nullable = false)
	private String email;
	@Column(nullable = false)
	private String senha;
	@OneToOne(mappedBy = "credenciado", cascade = CascadeType.ALL)
	@JsonIgnore
	private Usuario usuario;
}
