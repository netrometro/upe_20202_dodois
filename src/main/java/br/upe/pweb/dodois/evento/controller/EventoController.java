package br.upe.pweb.dodois.evento.controller;

import javax.validation.Valid;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired private IEventoServico eventoServico;
	
    @PostMapping("/evento")
	public Evento criarEvento(@Valid @RequestBody Evento evento) {
		return this.eventoServico.incluir(evento);
	}
}