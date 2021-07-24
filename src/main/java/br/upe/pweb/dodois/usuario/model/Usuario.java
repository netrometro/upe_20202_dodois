package br.upe.pweb.dodois.usuario.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import br.upe.pweb.dodois.base.Entidade;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
public class Usuario extends Entidade {
	private String nome;
	private Date dataNasc;
	private Double peso;
	private Double altura;
	private String sexo;
	private String parentesco;
	private String email;
	private String senha;
}
