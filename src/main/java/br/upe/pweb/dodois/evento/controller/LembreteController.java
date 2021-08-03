package br.upe.pweb.dodois.evento.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;
import java.util.List;

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

	@DeleteMapping("/lembrete/{id}")
	public void deletarLembrete(@PathVariable Long id){
		this.servico.excluir(id);
	}

	@GetMapping("/lembretes")
	public List<Lembrete> listarLembretes(){
		return (List<Lembrete>) servico.listar();
	}

	@PutMapping("/lembrete/{id}")
	public Lembrete atualizarLembrete(@PathVariable Long id, @Valid @RequestBody Lembrete lembrete) {
		return this.servico.alterarDescricao(id, lembrete.getDescricao());
	}

}
