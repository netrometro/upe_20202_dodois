package br.upe.pweb.dodois.usuario.controller;

import javax.validation.Valid;

import com.google.gson.JsonObject;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.upe.pweb.dodois.usuario.model.Grupo;
import br.upe.pweb.dodois.usuario.model.Usuario;
import br.upe.pweb.dodois.usuario.servico.interfaces.IUsuarioServico;

@RestController
@RequestMapping("/api/usuario")
public class ParenteController {

    @Autowired private IUsuarioServico usuarioServico;

	@PostMapping("/{idUsuario}/parente")
	public ResponseEntity<JsonObject> cadastrarParente(@Valid @PathVariable Long idUsuario, @Valid @RequestBody Usuario usuario) {
        JsonObject json = new JsonObject();
        json.addProperty("timestamp", LocalDateTime.now().toString());

        boolean usuarioExiste = usuarioServico.getDao().existsById(idUsuario);
        if (!usuarioExiste){
            json.addProperty("msg", "Usuário não existe.");
            return ResponseEntity.status(HttpStatus.OK).body(json);
        }
        Usuario usuarioExistente = usuarioServico.procurar(idUsuario);
        Grupo grupoExistente = usuarioExistente.getGrupo();
        usuario.setGrupo(grupoExistente);
        usuarioExistente.getGrupo().getUsuarios().add(usuario);
        usuarioServico.alterar(usuarioExistente);
        json.addProperty("msg", "Parente adicionado com sucesso.");
        return ResponseEntity.status(HttpStatus.OK).body(json);
	}

    @GetMapping("/{idUsuario}/parentes")
	public List<Usuario> listarParentes(@Valid @PathVariable Long idUsuario){
        boolean usuarioExiste = usuarioServico.getDao().existsById(idUsuario);
        if (!usuarioExiste){
            return null;
        }
        Usuario usuarioExistente = usuarioServico.procurar(idUsuario);
        return usuarioExistente.getGrupo().getUsuarios();
	}

	@DeleteMapping("/parente/{idParente}")
	public ResponseEntity<JsonObject> excluirParente(@Valid @PathVariable Long idParente) {
        JsonObject json = new JsonObject();
        json.addProperty("timestamp", LocalDateTime.now().toString());

        boolean parenteExiste = usuarioServico.getDao().existsById(idParente);
        if (!parenteExiste){
            json.addProperty("msg", "Parente não existe.");
            return ResponseEntity.status(HttpStatus.OK).body(json);
        }
        usuarioServico.excluir(idParente);
        json.addProperty("msg", "Parente removido com sucesso.");
        return ResponseEntity.status(HttpStatus.OK).body(json);
	}	
}
