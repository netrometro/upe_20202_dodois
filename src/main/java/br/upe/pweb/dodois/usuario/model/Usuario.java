package br.upe.pweb.dodois.usuario.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import br.upe.pweb.dodois.base.Entidade;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
public class Usuario extends Entidade {
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_usuario") @Id @Getter
	private Long id;
	@ManyToOne
	@JoinColumn(name = "id_grupo")
	private Grupo grupo;
	@OneToOne
	@JoinColumn(name = "id_credenciado")
    private Long idCredenciado;
    @Column(nullable = false)
	private String nome;
	@Column(nullable = false)
	private Date dataNasc;
	@Column(nullable = false)
	private Double peso;
	@Column(nullable = false)
	private Double altura;
	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private Sexo sexo;
	@Column(nullable = false)
	@Enumerated(EnumType.STRING)
	private Parentesco parentesco;
}