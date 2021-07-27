package br.upe.pweb.dodois.usuario.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.upe.pweb.dodois.usuario.model.Credenciado;
import br.upe.pweb.dodois.usuario.servicos.IUsuarioServico;

@RestController
@RequestMapping("/api")
public class UsuarioController {

	@Autowired
	private IUsuarioServico servico;

	@GetMapping("/usuarios")
	public List<Credenciado> listar() {
		return (List<Credenciado>) this.servico.listar();
	}

	@CrossOrigin(origins = "*")
	@PostMapping("/usuario")
	public Credenciado incluir(@Valid @RequestBody Credenciado usuario) {
		return this.servico.incluir(usuario);
	}

	@PutMapping("/usuario/{id}")
	public void atualizar(@Valid @RequestBody Credenciado usuario){
		this.servico.alterar(usuario);
	}

	@DeleteMapping("/usuario/{id}")
	public void excluir(@PathVariable Long id) {
		this.servico.excluir(id);
	}
}
