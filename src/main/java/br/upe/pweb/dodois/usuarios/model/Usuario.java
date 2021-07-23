package br.upe.pweb.dodois.usuarios.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import br.upe.pweb.dodois.base.Entidade;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@EqualsAndHashCode
public class Usuario extends Entidade {
	private String nome;
	
	@Enumerated(EnumType.STRING)
	private Sexo sexo;
	private String email;
	private String senha;
}
