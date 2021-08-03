package br.upe.pweb.dodois.evento.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.upe.pweb.dodois.evento.model.Evento;
import br.upe.pweb.dodois.evento.servico.interfaces.IEventoServico;

@RestController
@RequestMapping("/api")
public class EventoController {

    @Autowired private IEventoServico servico;
	
    @PostMapping("/evento")
	public Evento criarEvento(@RequestBody Evento evento) {
		return this.servico.incluir(evento);
	}

	@GetMapping("/eventos")
	public List<Evento> listarEventos(){
		return (List<Evento>) servico.listar();
	}

	@DeleteMapping("/evento/{id}")
	public void excluir(@PathVariable Long id) {
		servico.excluir(id);
	}

	
}