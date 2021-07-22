package br.upe.pweb.dodois.usuarios.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import br.upe.pweb.dodois.base.Entidade;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Data
@Entity
@EqualsAndHashCode
@ToString
public class Usuario extends Entidade {
	private String nome;
	private Date dataNasc;
	
	@Enumerated(EnumType.STRING)
	private Sexo sexo;
	private String email;
	private String senha;
}
