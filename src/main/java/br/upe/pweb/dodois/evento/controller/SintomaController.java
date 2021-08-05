package br.upe.pweb.dodois.evento.controller;

import java.util.List;

import javax.validation.Valid;

import com.google.gson.JsonObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.upe.pweb.dodois.evento.model.Sintoma;
import br.upe.pweb.dodois.evento.servico.interfaces.IEventoServico;
import br.upe.pweb.dodois.evento.servico.interfaces.ISintomaServico;

@RestController
@RequestMapping("/api")
public class SintomaController {

	@Autowired private ISintomaServico servico;
	
    @PostMapping("/sintoma/evento/{id}")
	public String criarSintoma(@PathVariable Long id, @RequestBody Sintoma sintoma) {
		servico.incluirEmEvento(sintoma, id);
		return "SINTOMA_CRIADO_SUCESSO";
	}

	@GetMapping("/sintomas/evento/{id}")
	public List<Sintoma> listarSintomas(@PathVariable Long id){
		return servico.pegarSintomasEvento(id);
	}
}