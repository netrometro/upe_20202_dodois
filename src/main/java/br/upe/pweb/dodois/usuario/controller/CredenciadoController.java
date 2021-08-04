package br.upe.pweb.dodois.usuario.controller;

import javax.validation.Valid;

import com.google.gson.JsonObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.upe.pweb.dodois.usuario.model.Credenciado;
import br.upe.pweb.dodois.usuario.servico.interfaces.ICredenciadoServico;

@RestController
@RequestMapping("/api")
public class CredenciadoController {

	@Autowired private ICredenciadoServico servico;

	@PostMapping("/login")
	public ResponseEntity<JsonObject> login(@Valid @RequestBody Credenciado credenciado) {
        Boolean credenciaisExistem = this.servico.existe(credenciado);
        JsonObject resposta = new JsonObject();
        resposta.addProperty("status", "CREDENCIAIS_INVALIDAS");
        if (credenciaisExistem){
            resposta.addProperty("status", "LOGIN_SUCESSO");
        }
        return new ResponseEntity<JsonObject>(resposta, HttpStatus.OK);
	}

}
