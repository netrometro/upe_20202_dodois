package br.upe.pweb.dodois.usuario.controller;

import java.time.LocalDateTime;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.google.gson.JsonObject;
import br.upe.pweb.dodois.usuario.model.Credenciado;
import br.upe.pweb.dodois.usuario.model.Usuario;
import br.upe.pweb.dodois.usuario.servico.interfaces.ICredenciadoServico;
import br.upe.pweb.dodois.usuario.servico.interfaces.IUsuarioServico;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

  @Autowired
  private ICredenciadoServico credenciadoServico;
  @Autowired
  private IUsuarioServico usuarioServico;

  @PostMapping("/cadastro/passo1")
  public ResponseEntity<JsonObject> cadastrarPasso1(@Valid @RequestBody Credenciado credenciado) {
    HttpStatus status;
    JsonObject json = new JsonObject();
    json.addProperty("dataHora", LocalDateTime.now().toString());

    try {
      credenciadoServico.incluir(credenciado);
      json.addProperty("msg", "Usuário cadastrado com sucesso.");
      status = HttpStatus.OK;
    } catch (RuntimeException e) {
      json.addProperty("msg", e.getMessage());
      status = HttpStatus.BAD_REQUEST;
    }
    return ResponseEntity.status(status).body(json);
  }

  @PostMapping("/cadastro/passo2")
  public ResponseEntity<JsonObject> cadastrarPasso1(@Valid @RequestBody Usuario usuario) {
    HttpStatus status;
    JsonObject json = new JsonObject();
    json.addProperty("dataHora", LocalDateTime.now().toString());

    try {
      usuarioServico.incluir(usuario);
      json.addProperty("msg", "Dados do usuário definidos com sucesso.");
      status = HttpStatus.OK;
    } catch (RuntimeException e) {
      json.addProperty("msg", e.getMessage());
      status = HttpStatus.BAD_REQUEST;
    }
    return ResponseEntity.status(status).body(json);
  }
}
