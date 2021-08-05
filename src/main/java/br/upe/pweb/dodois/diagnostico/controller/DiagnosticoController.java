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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.upe.pweb.dodois.diagnostico.model.Diagnostico;
import br.upe.pweb.dodois.diagnostico.servico.Interface.IDiagnosticoServico;

@RestController
@RequestMapping("/api")
public class DiagnosticoController {

	@Autowired
	private IDiagnosticoServico servico;

	@PostMapping("/diagnostico")
	public Diagnostico criarDiagnostico(@RequestBody Diagnostico diagnostico) {
		return this.servico.incluir(diagnostico);
	}

	@GetMapping("/diagnosticos")
	public List<Diagnostico> listarDiagnostico() {
		return (List<Diagnostico>) servico.listar();
	}

	@PutMapping("/diagnostico/{id}")
	public Diagnostico atualizarDiagnositico(@PathVariable Long id, @Valid @RequestBody Diagnostico diagnostico) {
		return this.servico.alterarDescricao(id, diagnostico.getDescricao());
	}

	@DeleteMapping("/diagnostico/{id}")
	public void excluir(@PathVariable Long id) {
		servico.excluir(id);

	}
}
