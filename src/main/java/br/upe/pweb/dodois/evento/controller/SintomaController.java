package br.upe.pweb.dodois.evento.controller;

import java.util.List;

import com.google.gson.JsonObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.upe.pweb.dodois.evento.model.Sintoma;
import br.upe.pweb.dodois.evento.servico.interfaces.IEventoServico;

@RestController
@RequestMapping("/api")
public class SintomaController {

	@Autowired private IEventoServico eventoServico;
	
    @PostMapping("/evento/{id}/sintoma")
	public ResponseEntity<JsonObject> criarSintoma(@PathVariable Long id, @RequestBody Sintoma sintoma) {
		JsonObject resposta = new JsonObject();
		this.eventoServico.incluirSintoma(id, sintoma);
		resposta.addProperty("status", "SINTOMA_CRIADO_SUCESSO");
		return new ResponseEntity<JsonObject>(resposta, HttpStatus.OK);
	}

	@GetMapping("/evento/{id}/sintomas")
	public ResponseEntity<List<Sintoma>> listarSintomasDoEvento(@PathVariable Long id){
		List<Sintoma> sintomas = eventoServico.listarSintomas(id);
		return new ResponseEntity<List<Sintoma>>(sintomas, HttpStatus.OK);
	}
}