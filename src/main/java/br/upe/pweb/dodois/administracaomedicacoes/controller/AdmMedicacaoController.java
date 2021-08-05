package br.upe.pweb.dodois.administracaomedicacoes.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.upe.pweb.dodois.administracaomedicacoes.model.AdmMedicacao;
import br.upe.pweb.dodois.administracaomedicacoes.servico.interfaces.IAdmMedicacaoServico;

@RestController
@RequestMapping("/api")
public class AdmMedicacaoController {
    
    @Autowired private IAdmMedicacaoServico servico;
	
    @PostMapping("/admmedicacao")
	public AdmMedicacao criarEvento(@RequestBody AdmMedicacao admMedicacao) {
		return this.servico.incluir(admMedicacao);
	}

	@GetMapping("/admmedicacoes")
	public List<AdmMedicacao> listarMedicacoes(){
		return (List<AdmMedicacao>) servico.listar();
	}

	@GetMapping("/admmedicacao/{id}")
	public AdmMedicacao listarMedicacao(@PathVariable Long id){
		return servico.procurar(id);
	}

	@DeleteMapping("/admmedicacao/{id}")
	public void deletarMedicacao(@PathVariable Long id){
		this.servico.excluir(id);
	}

}
