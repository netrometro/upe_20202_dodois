package br.upe.pweb.dodois.base;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

import lombok.Getter;
import lombok.Setter;

@MappedSuperclass
public abstract class Entidade implements Serializable{
	@Column(nullable = false) @Getter @Setter 
	private LocalDateTime dataInclusao;
	@Getter @Setter @Column(nullable = false)
	private LocalDateTime dataUltimaAlteracao;
}
