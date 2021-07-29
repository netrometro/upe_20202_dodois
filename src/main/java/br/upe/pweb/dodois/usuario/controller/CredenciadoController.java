package br.upe.pweb.dodois.usuario.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.upe.pweb.dodois.usuario.model.Credenciado;
import br.upe.pweb.dodois.usuario.servicos.interfaces.ICredenciadoServico;

@RestController
@RequestMapping("/api")
public class CredenciadoController {

	@Autowired private ICredenciadoServico servico;

	@PostMapping("/cadastro/passo1")
	public Credenciado cadastrarPasso1(@Valid @RequestBody Credenciado credenciado) {
		return this.servico.incluir(credenciado);
	}

	@PutMapping("/email")
	public Credenciado alterarEmail(@Valid @RequestBody Credenciado credenciado) {
		return this.servico.alterar(credenciado);
	}

}
