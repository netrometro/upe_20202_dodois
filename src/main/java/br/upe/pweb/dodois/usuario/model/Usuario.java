package br.upe.pweb.dodois.usuario.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import br.upe.pweb.dodois.base.Entidade;
import br.upe.pweb.dodois.evento.model.Evento;
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
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_grupo")
	@JsonBackReference
	private Grupo grupo;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_credenciado")
    private Credenciado credenciado;
    
	@Column(nullable = false)
	private String nome;
	
	@Column(nullable = false)
	private String dataNasc;
	
	@Column(nullable = false)
	private Double peso;
	
	@Column(nullable = false)
	private Double altura;
	
	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private Sexo sexo;
	
	@Enumerated(EnumType.STRING)
	private Parentesco parentesco;
	
	@OneToMany(mappedBy="usuario", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Evento> eventos;
}