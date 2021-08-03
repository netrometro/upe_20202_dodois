package br.upe.pweb.dodois.evento.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.upe.pweb.dodois.base.Entidade;
import br.upe.pweb.dodois.usuario.model.Usuario;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
public class Evento  extends Entidade{
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_evento") 
    @Id 
    @Getter 
	private Long id;

    @Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private Avaliacao avaliacao;

    @ManyToOne(cascade = CascadeType.ALL)
    @JsonIgnore
    private Usuario usuario;

    @OneToMany(mappedBy="evento", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Sintoma> sintomas;

    @OneToMany(mappedBy="evento", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Lembrete> lembretes;
}
