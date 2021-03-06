package br.upe.pweb.dodois.usuario.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import br.upe.pweb.dodois.base.Entidade;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
public class Grupo extends Entidade {
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "id_grupo")
  @Id
  @Getter
  private Long id;

  @OneToMany(mappedBy = "grupo", cascade = CascadeType.ALL)
  @Column(nullable = false)
  @JsonManagedReference
  private List<Usuario> usuarios;

  public Grupo() {
    this.usuarios = new ArrayList<Usuario>();
  }

  public Grupo(Usuario... usuarios) {
    this();
    this.usuarios.addAll(Arrays.asList(usuarios));
  }
}
