package br.upe.pweb.dodois.administracaomedicacoes.controller;


import org.springframework.beans.factory.annotation.Autowired;
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

}
