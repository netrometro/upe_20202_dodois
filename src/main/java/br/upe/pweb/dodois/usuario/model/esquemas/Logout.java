package br.upe.pweb.dodois.usuario.model.esquemas;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class Logout {
  private String token;  
}
