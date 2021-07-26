package com.example.base;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import lombok.Getter;
import lombok.Setter;

@MappedSuperclass
public abstract class Entidade implements Serializable{
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id") @Id @Getter 
	private Long id;
	@Getter @Setter 
	private LocalDateTime dataInclusao;
	@Getter @Setter 
	private LocalDateTime dataUltimaAlteracao;
}
