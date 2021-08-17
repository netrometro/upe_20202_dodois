package br.upe.pweb.dodois.usuario.controller;

import java.time.LocalDateTime;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.google.gson.JsonObject;
import br.upe.pweb.dodois.usuario.model.Credenciado;
import br.upe.pweb.dodois.usuario.model.Usuario;
import br.upe.pweb.dodois.usuario.model.esquemas.Logout;
import br.upe.pweb.dodois.usuario.model.esquemas.ResetarSenha;
import br.upe.pweb.dodois.usuario.servico.interfaces.ICredenciadoServico;
import br.upe.pweb.dodois.usuario.servico.interfaces.IGrupoServico;
import br.upe.pweb.dodois.usuario.servico.interfaces.IUsuarioServico;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

  @Autowired
  private ICredenciadoServico credenciadoServico;
  @Autowired
  private IGrupoServico grupoServico;
  @Autowired
  private IUsuarioServico usuarioServico;

  @PostMapping("/cadastro/passo1")
  public ResponseEntity<JsonObject> cadastrarPasso1(@Valid @RequestBody Credenciado credenciado) {
    ResponseEntity<JsonObject> resposta = null;

    JsonObject json = new JsonObject();
    json.addProperty("timestamp", LocalDateTime.now().toString());

    try {
      credenciadoServico.incluir(credenciado);
    } catch (Exception e) {
      json.addProperty("msg", "Usuário já existe.");
      resposta = ResponseEntity.status(HttpStatus.OK).body(json);
    }

    json.addProperty("msg", "Usuário cadastrado com sucesso.");
    resposta = ResponseEntity.status(HttpStatus.OK).body(json);

    return resposta;
  }

  @PostMapping("/cadastro/passo2/{idCredenciado}")
  public ResponseEntity<JsonObject> cadastrarPasso2(@Valid @PathVariable Long idCredenciado,
      @Valid @RequestBody Usuario usuario) {
    ResponseEntity<JsonObject> resposta = null;

    JsonObject json = new JsonObject();
    json.addProperty("timestamp", LocalDateTime.now().toString());

    try {
      usuarioServico.incluir(usuario, idCredenciado);

      json.addProperty("msg", "Informações do usuário definidas com sucesso.");
      resposta = ResponseEntity.status(HttpStatus.OK).body(json);

    } catch (Exception e) {
      json.addProperty("msg", e.getMessage());
      resposta = ResponseEntity.status(HttpStatus.OK).body(json);
    }

    return resposta;
  }

  @PostMapping("/login")
  public ResponseEntity<JsonObject> login(@Valid @RequestBody Credenciado credenciado) {
    JsonObject json = new JsonObject();
    json.addProperty("timestamp", LocalDateTime.now().toString());

    boolean credenciadoExiste = credenciadoServico.emailExiste(credenciado.getEmail());
    if (!credenciadoExiste) {
      json.addProperty("msg", "Usuário não existe.");
      return ResponseEntity.status(HttpStatus.OK).body(json);
    }
    boolean credenciaisValidas = credenciadoServico.credenciaisExistem(credenciado);
    if (!credenciaisValidas) {
      json.addProperty("msg", "Credenciais inválidas.");
      return ResponseEntity.status(HttpStatus.OK).body(json);
    }
    json.addProperty("msg", "Login feito com sucesso.");
    return ResponseEntity.status(HttpStatus.OK).body(json);
  }

  @PutMapping("/logout")
  public ResponseEntity<JsonObject> logout(@RequestBody Logout corpo) {
    JsonObject json = new JsonObject();
    json.addProperty("timestamp", LocalDateTime.now().toString());

    if (!corpo.getToken().equals("coxinha")) {
      json.addProperty("msg", "Token inválido.");
      return ResponseEntity.status(HttpStatus.OK).body(json);
    }
    json.addProperty("msg", "Logout feito com sucesso.");
    return ResponseEntity.status(HttpStatus.OK).body(json);
  }

  @PutMapping("/resetar-senha")
  public ResponseEntity<JsonObject> resetarSenha(@RequestBody ResetarSenha corpo) {
    JsonObject json = new JsonObject();
    json.addProperty("timestamp", LocalDateTime.now().toString());

    if (!corpo.getCodigo().equals("codigo1")) {
      json.addProperty("msg", "Código inválido.");
      return ResponseEntity.status(HttpStatus.OK).body(json);
    }
    Credenciado credenciado = credenciadoServico.procurarPorEmail(corpo.getEmail());
    credenciado.setSenha(corpo.getSenha());
    credenciadoServico.alterar(credenciado);
    json.addProperty("msg", "Senha redefinida com sucesso.");
    return ResponseEntity.status(HttpStatus.OK).body(json);
  }

}
