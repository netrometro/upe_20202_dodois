package br.upe.pweb.dodois.evento.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

import br.upe.pweb.dodois.evento.model.Lembrete;
import br.upe.pweb.dodois.evento.servico.interfaces.ILembreteServico;

@RestController
@RequestMapping("/api")
public class LembreteController {
    
    @Autowired private ILembreteServico servico;
	
	@PostMapping("/lembrete")
	public Lembrete cadastrarLembrete(@Valid @RequestBody Lembrete lembrete) {
		return this.servico.incluir(lembrete);
	}


}
