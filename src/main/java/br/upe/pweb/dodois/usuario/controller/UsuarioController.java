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
import br.upe.pweb.dodois.usuario.model.Usuario;
import br.upe.pweb.dodois.usuario.servicos.ICredenciadoServico;
import br.upe.pweb.dodois.usuario.servicos.IUsuarioServico;

@RestController
@RequestMapping("/api")
public class UsuarioController {

	@Autowired private IUsuarioServico usuarioServico;
	@Autowired private ICredenciadoServico credenciadoServico;

	@PostMapping("/usuario")
	public Credenciado cadastrar(@Valid @RequestBody Credenciado credenciado) {
		return this.credenciadoServico.incluir(credenciado);
	}

	@PostMapping("/completardados")
	public Usuario completardados(@Valid @RequestBody Usuario usuario) {
		return this.usuarioServico.incluir(usuario);
	}

	@DeleteMapping("/usuario/{id}")
	public String excluir(@Valid @PathVariable Long id) {
		this.usuarioServico.excluir(id);
		return "Usuário deletado com sucesso";
	}

	/*
	@CrossOrigin(origins = "*")
	@PostMapping("/login")
	public Credenciado login(@Valid @RequestBody Credenciado credenciado) {
		return this.servico.incluir(usuario);
	}

	@PutMapping("/preencherdados/{id}")
	public void preencherdados(@Valid @RequestBody Usuario usuario){
		this.servico.alterar(usuario);
	}*/

}
