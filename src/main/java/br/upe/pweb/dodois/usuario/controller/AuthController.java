package br.upe.pweb.dodois.usuario.controller;

import java.time.LocalDateTime;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.google.gson.JsonObject;
import br.upe.pweb.dodois.usuario.model.Credenciado;
import br.upe.pweb.dodois.usuario.model.Grupo;
import br.upe.pweb.dodois.usuario.model.Usuario;
import br.upe.pweb.dodois.usuario.servico.interfaces.ICredenciadoServico;
import br.upe.pweb.dodois.usuario.servico.interfaces.IUsuarioServico;
import br.upe.pweb.dodois.usuario.servico.interfaces.IGrupoServico;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

  @Autowired
  private ICredenciadoServico credenciadoServico;
  @Autowired
  private IUsuarioServico usuarioServico;
  @Autowired
  private IGrupoServico grupoServico;

  @CrossOrigin(origins = "http://localhost:3000")
  @PostMapping("/cadastro/passo1")
  public ResponseEntity<JsonObject> cadastrarPasso1(@Valid @RequestBody Credenciado credenciado) {
    HttpStatus status;
    JsonObject json = new JsonObject();
    json.addProperty("dataHora", LocalDateTime.now().toString());

    try {
      credenciadoServico.incluir(credenciado);
      json.addProperty("status", "USUARIO_CRIADO_SUCESSO");
      status = HttpStatus.OK;
    } catch (RuntimeException e) {
      json.addProperty("status", e.getMessage());
      status = HttpStatus.BAD_REQUEST;
    }
    return ResponseEntity.status(status).body(json);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @PostMapping("/cadastro/passo2/{credenciadoId}")
  public ResponseEntity<JsonObject> cadastrarPasso2(@PathVariable Long credenciadoId, @Valid @RequestBody Usuario usuario) {
    HttpStatus status;
    JsonObject json = new JsonObject();
    json.addProperty("dataHora", LocalDateTime.now().toString());

    try {
      Credenciado credenciado = credenciadoServico.procurar(credenciadoId);
      Usuario usuarioCriado = usuarioServico.incluir(usuario);
      Grupo grupo = grupoServico.incluirGrupoInicial(usuarioCriado);
      usuarioServico.alterarUsuarioNovo(credenciado, grupo, usuarioCriado);
      json.addProperty("status", "DADOS_USUARIO_DEFINIDOS_SUCESSO");
      status = HttpStatus.OK;
    } catch (Exception e) {
      json.addProperty("status", e.getMessage());
      status = HttpStatus.BAD_REQUEST;
    }
    return ResponseEntity.status(status).body(json);
  }
}
