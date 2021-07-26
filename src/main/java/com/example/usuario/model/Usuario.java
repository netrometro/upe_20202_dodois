package com.example.usuario.model;

import java.util.Date;

import javax.persistence.Entity;

import com.example.base.Entidade;

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
