package br.upe.pweb.dodois.diagnostico.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import br.upe.pweb.dodois.diagnostico.model.Receita;
import br.upe.pweb.dodois.diagnostico.servico.Interface.IReceitaServico;

public class ReceitaController {
	@Autowired
	private IReceitaServico servico;

	@PostMapping("/receita")
	public Receita criarReceita(@RequestBody Receita receita) {
		return this.servico.incluir(receita);
	}

	@GetMapping("/receitas")
	public List<Receita> listarReceita() {
		return (List<Receita>) servico.listar();
	}

	@PutMapping("/receita/{id}")
	public Receita atualizarReceita(@PathVariable Long id, @Valid @RequestBody Receita receita) {
		return this.servico.alterarDescricao(id, receita.getDescricao());
	}

	@DeleteMapping("/receita/{id}")
	public void excluir(@PathVariable Long id) {
		servico.excluir(id);
	}
}
